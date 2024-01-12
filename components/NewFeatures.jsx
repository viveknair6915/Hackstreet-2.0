import styles from '../styles';

function NewFeatures({ imgUrl, title, subtitle }) {
  return (
    <div className="flex-1 flex flex-col sm:min-w-[210px]">
      <div
        className={`${styles.flexCenter} lg:w-[70px] w-[45px] lg:h-[70px] h-[45px] rounded-[24px] bg-[#323f5d]`}
      >
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="lg:mt-[24px] lg:mr-[5px] sm:mt-[4px] font-bold lg:text-[20px] text-[12px] leading-[30px] text-white">
        {title}
      </h1>
      <p className="flex-1 lg:mt-[20px] mt-[10px] font-normal lg:text-[22px] text-[14px] text-[#b0b0b0] leading-[32px]">
        {subtitle}
      </p>
      <br />
    </div>
  );
}

export default NewFeatures;
