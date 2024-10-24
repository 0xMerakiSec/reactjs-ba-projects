const skills = [
  {
    name: "MongoDB",
    color: "green",
  },
  {
    name: "Express",
    color: "red",
  },
  {
    name: "React",
    color: "teal",
  },
  {
    name: "NodeJS",
    color: "yellow",
  },
];

function SkillList() {
  return (
    <>
      {skills ? (
        <div className="skill-list">
          {skills.map((skill) => (
            <Skill skillObj={skill} key={skill.name} />
          ))}
        </div>
      ) : (
        <p className="skill-list">NO SKILL</p>
      )}
    </>
  );
}
function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.name}</span>
    </div>
  );
}

export default SkillList;
