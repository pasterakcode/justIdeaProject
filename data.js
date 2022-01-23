const offer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        desc: 'Zarządzanie projektami',
                        img: './photos/photo11.JPG',
                    },
                    {
                        desc: 'Dotacje i granty międzynarodowe',
                        img: './photos/photo1.JPG',
                    },
                    {
                        desc: 'Międzynarodowa księgowość, kardy i podatki',
                        img: './photos/photo3.JPG',
                    },
                    {
                        desc: 'Prawo międzynarodowe',
                        img: './photos/photo5.JPG',
                    },
                    {
                        desc: 'Finansowanie handlu międzynarodowego',
                        img: './photos/photo7.JPG',
                    },
                    {
                        desc: 'Pozyskiwanie inwestorów (M&A)',
                        img: './photos/photo9.JPG',
                    },
                    {
                        desc: 'Nieruchomości',
                        img: './photos/photo12.JPG',
                    },
                    {
                        desc: 'Komercjalizacja własności intelektualnej',
                        img: './photos/photo2.JPG',
                    },
                    {
                        desc: 'Podnoszenie produktywności',
                        img: './photos/photo4.JPG',
                    },
                    {
                        desc: 'Crowdfunding',
                        img: './photos/photo6.JPG',
                    },
                    {
                        desc: 'Ubezpieczenia międzynarodowe',
                        img: './photos/photo8.JPG',
                    },
                    {
                        desc: 'Marketing 360st',
                        img: './photos/photo10.JPG',
                    },
                ]
            })
        }, 250);
    })
}