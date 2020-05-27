import React from "react";

interface FooterProps {
  callback?: () => void;
}

// 1. without everything
// 2. with memo
// 3. with functiom
// 4. with callback

const Footer: React.FC<FooterProps> = ({ callback }) => {
  console.log("Footer rendering");

  return (
    <div onClick={callback ? () => callback() : undefined}>
      This is footer {Math.round(Math.random() * 50000)}
    </div>
  );
};

export default Footer;
