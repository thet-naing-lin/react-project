import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import VoucherList from '../components/VoucherList'

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle="Voucher Module" icon={<FaFileInvoiceDollar />} />
        <VoucherList />
      </Container>
    </section>
  )
}

export default VoucherPage