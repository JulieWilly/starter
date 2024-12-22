import Button from '../../Components/Button'
import Image from '../../Components/Image';
const ExploreTool = () => {
  return (
    <div className="p-8   bg-[#8D1A5F] flex items center gap-4 justify-between ">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl text-white tracking-wide font-bold p-2 ">
          Readily available AI tool for your.
        </h1>
        <p className="text-lg tracking-wide p-2 mb-8 ">
          Explore variety of AI tools that are ready for use. Using AI tools is
          one of the best way to kick start your business.
        </p>

        <Button name={"Explore "} />
      </div>
      <div className="w-1/2 flex items-center gap-4 justify-center ">
        <div className="w-20 f-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRoE5DcalLnKRtZfuKddbpQxE2rGNLe6jXw&s"
            alt=""
            className="mix-blend-color-burn"
          />
        </div>
        <div className="w-20 f-20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png"
            alt=""
            className="mix-blend-color-burn"
          />
        </div>

        <div className="w-20 f-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRFU3IbeYaf8ErVbB3NGS89wzUX6_hsdnQQ&s"
            alt=""
            className="mix-blend-color-burn"
          />
        </div>

        <div className="w-20 f-20">
          <img
            src="https://automationsprints.com/wp-content/uploads/2024/09/zapier-logo_black.png"
            alt=""
            className="mix-blend-color-burn"
          />
        </div>

        <div className="w-20 f-20">
          <img
            src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
            alt=""
            className="mix-blend-color-burn"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreTool