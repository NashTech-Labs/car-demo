import { OrderSuccess } from "./components/OrderSuccess"
import { OrderFail } from "./components/OrderFail"

export const OrderPage = () => {
    const status= true;

    return (
    //   <div>OrderPage</div>
      <main>
        { status ? <OrderSuccess /> : <OrderFail />}
      </main>
    )
  }