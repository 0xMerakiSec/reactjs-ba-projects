import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="bg-slate-300 shadow=xl font-light text-center p-4 text-4xl">
      User: {id}{" "}
    </div>
  );
}

export default User;
