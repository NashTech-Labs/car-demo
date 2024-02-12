import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
  const carListLength = 0;
  return (
    <main>       
      { carListLength ? <CartList /> : <CartEmpty /> }
    </main>
  )
}
