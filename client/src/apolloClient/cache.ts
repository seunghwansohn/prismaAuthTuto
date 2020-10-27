import {
  InMemoryCache,
  makeVar,
} from "@apollo/client";

export const cartItemsVar = makeVar([])
export const ifCheckedVar = makeVar(false)

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          }
        },
        ifChecked : {
          read() {
            return ifCheckedVar()
          }
        }
      }
    }
  }
});
