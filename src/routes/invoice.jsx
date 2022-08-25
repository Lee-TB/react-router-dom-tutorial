import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due data: {invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate('/invoices' + location.search);
        }}
      >
        Delete
      </button>
    </main>
  );
}
