import Container from "@/components/Container";
import Products from "@/components/Products";
import { getPhones } from "@/helpers";
import React from "react";

const page = async () => {
  const Phone = await getPhones();
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
        <h2>Phones</h2>
        <p>Get the Phone you want</p>
      </div>
      <p className="mt-4 text-zinc-500 font-semibold">
        Showing all {Phone.length} results
      </p>
      <Products Product={Phone} />
    </Container>
  );
};

export default page;
