import PropTypes from "prop-types";

const RaisonsItem = (props) => {
  return (
    <div
      className=" flex gap-5 justify-center items-center tablet:flex-col tablet:justify-start max-w-md tablet:px-5 tablet:max-w-xs laptop:w-1/4 laptop:px-0"
      data-aos="fade-up"
      data-aos-delay={props.delay}
    >
      <img
        src={`/assets/svg/${props.icon}.svg`}
        alt={`Icon de ${props.title}`}
        className="w-16 h-fit tablet:w-20 laptop:w-24 "
      />
      <div className="flex flex-col gap-2 font-main text-slate-700 tablet:gap-3">
        <h4 className="font-medium text-xl dark:text-white">{props.title}</h4>
        {/* <p className="text-small dark:text-slate-300">{props.content}</p> */}
      </div>
    </div>
  );
};

RaisonsItem.propTypes = {
  icon: PropTypes.string,
  delay: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default RaisonsItem;
