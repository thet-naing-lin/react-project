import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiShoppingCart } from "react-icons/hi2";
import { SiPaperswithcode } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";

const DashboardPage = () => {
  return (
    <section className="font-body font-bold">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-3">
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<AiFillProduct className="size-10" />}
              url={"/product"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<HiShoppingCart className="size-10"/>}
              url={"/sale"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<SiPaperswithcode  className="size-10" />}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
