import { fireEvent, render, screen } from "@testing-library/react"
import Form from "."
import userEvent from '@testing-library/user-event'


test('Kosullarin onaylanmasina gore butonlarin aktifligi', async () =>{

     //user kurulumu yap
     const user = userEvent.setup()

    //test edicecek lemeanlari ekrana bas 
     render(<Form />);
     
    //gerekli elemanlari cagir
    const checkBox =  screen.getByRole('checkbox')
    const button = screen.getByRole('button')


    //1)checkbox tiksizdir
    expect(checkBox).not.toBeChecked()
    
    //2)buton inaktiflestir
    expect(button).toBeDisabled()
    

    //3)checkbox tikla
    await user.click(checkBox)
    //4)buton aktiflestir
    expect(button).toBeEnabled()

    //5)checkbox tan tiki kaldir
     await user.click(checkBox)
    
    //6)buton inaktiflestir
    expect(button).toBeDisabled()

})

test('Onay butonu hover durumuna gore bildiodirm gozukmesi', ()=>{
    //user kurulumu yap
    const user = userEvent.setup()
    //test edicecek lemanlari ekrana bas
    render(<Form />);
    //gerekli elemanlari cagir
    const checkBox =screen.getByRole('checkbox')
    const button = screen.getByRole('button')

    //normal sartlarda cagiridkmiz zaman icindeki elemanin tamaninin veririz ama exact true ile yazmanaya gerek kalmaz

    //regex daha kolay /size gerckten/i
    
    const popup = screen.getByText(' Size gercekten bir sey teslim etcez ')
})