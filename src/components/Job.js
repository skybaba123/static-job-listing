import React from "react";

const Job = ({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  onSearch,
  search,
}) => {
  const currentTools = [role, level, ...languages, ...tools];
  return (
    <div
      style={{ borderLeft: isFeatured && "6px solid hsl(180, 31%, 42%)" }}
      className="job-wrapper"
    >
      <div className="job-wrapper-left">
        <img src={`${logo}`} alt="test" />
        <div className="job-wrapper-left_detail">
          <div className="company">
            <p className="company-name">{company}</p>
            {isNew && <p className="new">NEW!</p>}
            {isFeatured && <p className="feature">FEATURED</p>}
          </div>
          <p className="position">{position}</p>
          <p className="detail">
            {postedAt} . {contract} . {location}
          </p>
        </div>
      </div>

      <div className="job-wrapper-right">
        {currentTools.map((tools) => (
          <p
            style={{
              backgroundColor: search.includes(tools) && "hsl(180, 29%, 50%)",
              color: search.includes(tools) && "#fff",
            }}
            onClick={onSearch.bind(this, tools)}
            key={tools}
          >
            {tools}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Job;
