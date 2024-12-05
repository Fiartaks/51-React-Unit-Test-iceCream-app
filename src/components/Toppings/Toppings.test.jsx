import { render, screen } from "@testing-library/react"
import Toppings from "."
import userEvent from "@testing-library/user-event"

test('Api den gelen veriler icin ekrana kartlar basiliyor mu?',async()=>{

    render(<Toppings />)
    //ekrana basilan resimleri al
    const images = await screen.findAllByAltText('sos-resim')

    expect(images.length).toBeGreaterThan(0)

    
})

test('Soslari ekleme ve cikarma islemleri toplama etki eder',async ()=>{
    const user = userEvent.setup();
    render(<Toppings />) 

    //toplam span i al
      const total = screen.getByTestId('total')
    //butun kodlari cagir
    const toppings = await screen.findAllByRole('checkbox')


    //1)Soslar ucreti 0 mi 
    expect(total.textContent).toBe('0')
    //2) soalardan birine tikla
    await user.click(toppings[0])
    //3)total 3 e esit mi
    expect(total.textContent).toBe('3')
    //4)soslardan birine tikla
    await user.click(toppings[2])
    //5)total 6 ya esit mi
    expect(total.textContent).toBe('6')
    
    //6)daha once tiklanan sosa tekrar tikla
    await user.click(toppings[0])
    
    //7)total 3 e esit mi?
    expect(total.textContent).toBe('3')

    //8)daha once tiklanan sosa tekrar tikla
    await user.click(toppings[2])
    
    
    //9)total 0 e esit mi?
    expect(total.textContent).toBe('0')

})