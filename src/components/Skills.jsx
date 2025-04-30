export default function Skills() {
  return (
    <div className="flex justify-between px-20 md:px-40 lg:px-80 py-16 ">
      <div>
        <h1 className="text-5xl text-customPurple font-bold">Skills</h1>
      </div>
      <div className="grow-1 flex justify-end items-center">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/color/96/000000/javascript--v1.png"
              alt="JavaScript"
            />
            <p className="text-center">JAVASCRIPT</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/color/96/000000/nodejs.png"
              alt="Node JS"
            />
            <p className="text-center">NODE</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/color/96/000000/react-native.png"
              alt="React"
            />
            <p className="text-center">REACT</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/?size=96&id=i19Ns28h30P4&format=png&color=000000"
              alt="VS Code"
            />
            <p className="text-center">VS CODE</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/color/96/000000/redux.png"
              alt="Redux"
            />
            <p className="text-center">REDUX</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/color/96/000000/figma.png"
              alt="Figma"
            />
            <p className="text-center">FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
