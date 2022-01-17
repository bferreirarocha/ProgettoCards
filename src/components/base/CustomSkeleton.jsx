import styledComponents from "styled-components";
// import "./style.scss";
export const CustomSkeleton = () => {
  const CustomSkeleton = styledComponents.div`
  
        height: 5.99vw;
        width: 100%;
        background-color: #d3d3d3;
        box-sizing: border-box;
        padding: 0.26vw;
        display: flex;
        flex-direction: column;
      
        ul {
          width: inherit;
          height: 100%;
          background: linear-gradient(0.25turn, transparent, #fff, transparent),
            linear-gradient(#d3d3d3, #d3d3d3),
            radial-gradient(38px circle at 19px 19px, #d3d3d3 50%, transparent 51%),
            linear-gradient(#d3d3d3, #d3d3d3);
          background-repeat: no-repeat;
          background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
          background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
          animation: loading 1.5s infinite;
          li {
            margin: 0.26vw 0;
      
            &:nth-child(1) {
              width: 25%;
              height: 25%;
              border-radius: 5.21vw;
              background-color: white;
            }
            &:nth-child(2) {
              width: 100%;
              height: 25%;
              background-color: white;
            }
            &:nth-child(3) {
              margin: 0.26vw 0;
              width: 100%;
              height: 25%;
              background-color: white;
            }
          }
        }
      }
      @keyframes loading {
        to {
          background-position: 315px 0, 0 0, 0 190px, 50px 195px;
        }
      
      `;
  return (
    <CustomSkeleton className="CustomSkeleton">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </CustomSkeleton>
  );
};

export default CustomSkeleton;
