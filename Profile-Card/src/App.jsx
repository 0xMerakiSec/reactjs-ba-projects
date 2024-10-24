import Card from "./Card";

const profile = {
  photo:
    "https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  name: "Steve",
  description:
    "Passionate and versatile Full-Stack Software Developer with [X] years of experience in designing, developing, and deploying high-quality applications and solutions",
  skills: [
    "Front-End",
    "Back-End",
    "Database",
    "DevOps",
    "Version Control",
    "Testing",
    "Agile",
  ],
};

function App() {
  return (
    <div className="bg-slate-200 w-full h-screen flex flex-grow justify-center items-center p-10">
      <Card
        name={profile.name}
        description={profile.description}
        skills={profile.skills}
        photo={profile.photo}
      />
    </div>
  );
}

export default App;
