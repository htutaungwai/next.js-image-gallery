import React, { useEffect } from "react";

const Page = async () => {
  await new Promise((resovle) => setTimeout(resovle, 3000));

  return <div>Hello NEXT JS 14</div>;
};

export default Page;
