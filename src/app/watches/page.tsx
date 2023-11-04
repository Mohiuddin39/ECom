import Container from "@/components/Container";
import Products from "@/components/Products";
import { getWatches } from "@/helpers";
import React from "react";

const page = async () => {
  const products = await getWatches();
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
        <h2>Watches</h2>
        <p>Get the Watches you want</p>
      </div>
      <p className="mt-4 text-zinc-500 font-semibold">
        Showing all {products.length} results
      </p>
      <Products Product={products} />
    </Container>
  );
};

export default page;
