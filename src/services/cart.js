//acoes que o carrinho pode fazer

//1. adicionar um item
async function addItem(userCart, item){
    userCart.push(item);
}

//2. deletar item do carrinho (exclui todos os itens do carrinho)
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

//3. remover um item (quando tem mais de um item do mesmo no carrinho, diminui a quantidade)
async function removeItemByIndex(userCart, index){
    const deleteIndex = index - 1;
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if(indexFound === -1){
        console.log("Item não encontrado no carrinho");
        return;
    }
    if(userCart[indexFound].quant > 1){
        userCart[indexFound].quant -= 1;
        return;
    }
    if(userCart[indexFound].quant === 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

//4. calcular o total
async function calculateTotal(userCart){
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

async function displayCart(userCart){
    console.log("Lista do carrinho: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quant} | Subtotal = R$${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    removeItemByIndex,
}