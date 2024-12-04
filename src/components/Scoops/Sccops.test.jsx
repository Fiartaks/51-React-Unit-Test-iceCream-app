import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from '@testing-library/user-event'

/*
 ! Seçiciler > 3 ana paraçadan oluşur
 ? Method [All] BySeçici
 * method > get | find | query
 * get > element başlangıçta dom'da var ise kullanılır | eleman bulamazsa test fail olur
 * query > get ile bezner çalışır ama | eleman bulamazsa null döndürür test devam eder
 * find > elementin ne zaman ekrena basılcağı belli değilse (async)
 
 * not: find methodu promise döndürür
 * bu yüzdden async await ile kullanılmalı
 * 
 * eğer all kullanırsak cevap her zaman dizi şeklinde döner
 */




test ("Api den gelen veriler icin ekrana kartlar basilir",async () => {
    render(<Scoops />)

    //ekrana basilan resimleri al
    const images = await screen.findAllByAltText('cesit-resim')


    //gelen resimlerin sayisi birden buyuk mu
   expect(images.length).toBeGreaterThanOrEqual(1)
})

test("cesit ekleme ve sifirlama isleminin toplam fiyata etkisi",async ()=>{

    //user kurulumu
    const user = userEvent.setup()
    //bileseni ekrana bas

render(<Scoops />);

    //ekelme ve sifirlama butonlarini cagir
    const addButtons= await screen.findAllByRole("button",{name:'Ekle',})
    const delButtons= await screen.findAllByRole("button",{name:'Sifirla',})


    //toplam spani cagir
    const total = screen.getByTestId('total')



    // 1) toplam fiyat 0 dir
    expect(total.textContent).toBe('0')

    // 2) ekle butonalrindan birine tikla

    await user.click(addButtons[0])
    // 3) toplam fiyati 20 olur
    expect(total.textContent).toBe('20')

    // 4) farkli bir cesitten iki tane ekle
    await user.dblClick(addButtons[2])

    // 5) toplam fiyat 60 olur
    expect(total.textContent).toBe('60')

    // 6) sifirla butonlarindan birine tikla
    await user.click(delButtons[0])

    // 7) toplam fiyat 40 olur
    expect(total.textContent).toBe('40')

    // 8) 2 tane ekleneni sifirla
    await user.click(delButtons[2])

    // 9) toplam fiyati 0 olur 
    expect(total.textContent).toBe('0')

})