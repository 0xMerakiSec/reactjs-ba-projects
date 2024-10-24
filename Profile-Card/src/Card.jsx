function Card({ name, description, skills, photo }) {
  return (
    <>
      <div className=" p-10 w-50 flex flex-col gap-2 bg-black border-black bg-opacity-95 rounded-t-xl ">
        <div>
          <img
            src={photo}
            alt="Card Profile Image "
            className="w-auto rounded-full"
          />
        </div>
        <div>
          <div className="text-3xl font-extrabold text-left text-white">
            <h2>{name}</h2>
          </div>
          <div className="text-slate-400  ">{description}</div>
          <div>
            <button>{skills}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
