
// import styled from 'styled-components';

// const UiverseBtn = () => {
//   return (
//     <StyledWrapper>
   
    
//        <button className="shadow__btn">
//         Ride Book
//       </button>

//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .shadow__btn {
//     padding: 10px 20px;
//     border: none;
//     font-size: 17px;
//     color: #fff;
//     border-radius: 7px;
//     letter-spacing: 4px;
//     font-weight: 700;
//     text-transform: uppercase;
//     transition: 0.5s;
//     transition-property: box-shadow;
//   }

//   .shadow__btn {
//     background: rgb(0,140,255);
//     box-shadow: 0 0 25px rgb(0,140,255);
//   }

//   .shadow__btn:hover {
//     box-shadow: 0 0 5px rgb(0,140,255),
//                 0 0 25px rgb(0,140,255),
//                 0 0 50px rgb(0,140,255),
//                 0 0 100px rgb(0,140,255);
//   }`;

// export default UiverseBtn;






import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const UiverseBtn = () => {
  return (
    <StyledWrapper>
      <button className="shadow__btn">Ride Book</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-block;

  .shadow__btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 12px 24px;
    border: none;
    outline: none;
    cursor: pointer;

    font-size: 16px;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #fff;
    border-radius: 12px; /* rounded-xl */

    /* fallback */
    background: rgb(0, 140, 255);

    /* gradient + animate-glow (from-pink-500 via-red-500 to-orange-400) */
    background-image: linear-gradient(
      to right,
      #ec4899,
      #ef4444,
      #fb923c
    );
    background-size: 200% 200%;
    animation: ${glow} 6s ease infinite;

    transition: box-shadow 0.35s ease, transform 0.2s ease;
    box-shadow: 0 0 25px rgba(236, 72, 153, 0.4);
  }

  .shadow__btn:hover {
    transform: translateY(-1px);
    box-shadow:
      0 0 6px rgba(236, 72, 153, 0.8),
      0 0 24px rgba(239, 68, 68, 0.6),
      0 0 48px rgba(251, 146, 60, 0.5);
  }
`;

export default UiverseBtn;
