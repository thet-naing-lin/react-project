import React from 'react'
import Container from '../../../components/Container';
import BreadCrumb from '../../../components/BreadCrumb';
import { HiGift } from 'react-icons/hi2';
import ProductTable from '../components/ProductTable';

const ProductListPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle="Product Module" icon={<HiGift />} />
        <ProductTable />
      </Container>
    </section>
  );
}

export default ProductListPage