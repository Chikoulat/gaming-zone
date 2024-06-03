import group1 from "../assets/images/Group-1.png";
import group2 from "../assets/images/Group-2.png";
import group from "../assets/images/Group.png";
import path44 from "../assets/images/Path 44.png";
import path45 from "../assets/images/Path 45.png";
import path56 from "../assets/images/Path 56.png";

function Draft() {
  return (
    <>
      <section className="mt-10">
        <div className="flex flex-row justify-center py-20 gap-10">
          <img
            src={group1}
            alt="group1"
            className="animate-bounce h-20 animate-infinite animate-duration-[5s]"
          />
          <img
            src={group2}
            alt="group1"
            className="animate-pulse h-20 animate-infinite"
          />
          <img
            src={group}
            alt="group1"
            className="animate-bounce h-20 animate-infinite animate-duration-[5s]"
          />
          <img
            src={path44}
            alt="path44"
            className="animate-shake h-20 animate-infinite animate-duration-[12s]"
          />
          <img
            src={path45}
            alt="path44"
            className="animate-bounce h-20 animate-infinite animate-duration-[5s]"
          />
          <img
            src={path56}
            alt="path44"
            className="animate-shake h-20 animate-infinite animate-duration-[12s]"
          />
        </div>
      </section>
    </>
  );
}

export default Draft;
