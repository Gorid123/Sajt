const getIndex = () => {
    const text = window.location.href //dobija se url
    const i = text.lastIndexOf('=') //ide se od kraja i trazi se indeks karaktera '='
    if (i == -1) return null //ako ga nije nasao onda je i = -1
    return parseInt(text.substring(i + 1)) //ako jeste vraca ceo broj od isecenog dela url-a
}

const info = [
    [
        'Prodaju se u paru',
        'Kombinacija visokokvalitetnog neoprena koji se koristi u našim steznicima za kolena sa tanjom unutrašnjom oblogom za lakše postavljanje i slobodno kretanje',
        'Pogodno za treninge i događaje',
        'Dizajniran da umanji rizik od povreda i poveća performanse',
        '5 mm i 7 mm neopren visokog kvaliteta',
        'Ojačana konstrukcija šava kako bi se povećala dugovečnost',
        'Proizvedeno u Velikoj Britaniji'
    ],
    [
        'Prodaje se u paru',
        'Vodeća podrška za zglobove kolena za sportove snage i treninge snage na tržištu, koju koriste dizači svetske klase, dizači tegova i Powerlifteri.',
        'Dizajniran da smanji rizik od povreda i poveća performanse.',
        'Registrovani i patentirani dizajn razvijen u saradnji sa elitnim sportistima, trenerima i zdravstvenim radnicima.',
        'IPF odobren i IVF u skladu sa maksimalno dozvoljenom dužinom od 30 cm.',
        '7 mm neopren visoke klase.',
        'Ojačana konstrukcija šava kako bi se povećala dugovečnost.',
        'Proizvedeno u Velikoj Britaniji.'
    ],
    [
        'Prodaju se u paru',
        'IPF odobren, sa maksimalnom širinom (8 cm) i do maksimalne dužine (1 m)',
        'Široka zaštićena lastika razvijena i proizvedena posebno za potporu zglobu',
        'Petlja za velika opterećenja, posebno proizvedena uz glavnu široku elastiku',
        'Dizajnirano da pruža jednaku potporu levom i desnom zglobu',
        'Dugovečnost i sigurnost su obezbeđeni zahvaljujući najvišim industrijskim standardima',
        'Proizvedeno u Velikoj Britaniji'
    ],
    [
        'Debljina 13 mm i širina 10 cm.',
        'Završna obrada od crne nauljene kože sa unutrašnjošću od crvenog antilopa.',
        'IPF odobren.',
        'Engleska koža pripremana više od pet meseci za snagu i dugovečnost.',
        'Proizvedeno u Velikoj Britaniji.'
    ],
    [
        'Sadrži patentiranu kopču , sa kliznom polugom i podesivošću nazubljenog remena',
        'Engleska koža pripremljena tokom 5 meseci za snagu i dugotrajnost',
        'Crna podmazana kožna završna obrada s crvenim antilopom',
        'IPF Odobren za SBD sa maksimalnom debljinom od 13 mm i širinom od 10 cm',
        'Proizvedeno isključivo odeću'
    ]
]
const products = [
    {
        n: 1, //br slike
        price: 8400,
        name: 'STEZNICI ZA LAKTOVE PHANTOM',
        info_index: 0
    },
    {
        n: 2,
        price: 8400,
        name: 'STEZNICI ZA LAKTOVE DEFY LIMITED',
        info_index: 0
    },
    {
        n: 3,
        price: 7800,
        name: 'STEZNICI ZA LAKTOVE',
        info_index: 0
    },
    {
        n: 6,
        price: 10200,
        name: 'Steznici za kolena Phantom',
        info_index: 1
    },
    {
        n: 7,
        price: 10200,
        name: 'Steznici za kolena Defy Limited',
        info_index: 1
    },
    {
        n: 8,
        price: 9600,
        name: 'Steznici za kolena',
        info_index: 1
    },
    {
        n: 9,
        price: 5600,
        name: 'Bandaže za zglobove Phantom',
        info_index: 2
    },
    {
        n: 10,
        price: 5600,
        name: 'Bandaže za zglobove Defy',
        info_index: 2
    },
    {
        n: 11,
        price: 5000,
        name: 'Bandaže za zglobove 40, 60, 100cm tvrde/meke',
        info_index: 2
    },
    {
        n: 4,
        price: 24600,
        name: 'Pojas',
        info_index: 3
    },
    {
        n: 5,
        price: 24600,
        name: 'Pojas sa polugom',
        info_index: 4
    }
]

const product_index = getIndex()
const getElement = id => document.getElementById(id) //zbog skracivanja koda

const SelectProduct = () => {
    if (product_index == null || Number.isNaN(product_index) || product_index < 0 || product_index >= products.length) {
        window.open('page.html', '_self') //vraca se na home ako url nije dobar
        return
    }
    //ubacivanje informacija
    const { n, price, name, info_index } = products[product_index]
    //n je dobijeno na isti nacin kao i n = products[product_index].n
    getElement('product-image').src = `slike/velike/${n}.jpg`
    getElement('product-name').innerText = name
    getElement('product-price').innerText = `${price} RSD`
    const ul = getElement('product-info')
    info[info_index].forEach(text => {
        const li = document.createElement('li')
        const text_node = document.createTextNode(text) //mora da se napravi text node; ne moze direktno tekst da se ubaci
        li.appendChild(text_node) //text node se ubacuje u li
        ul.appendChild(li) //li se ubacuje u unordered listu
    })
}

SelectProduct() //prikazuje proizvod na osnovu indeksa iz url adrese
getElement('product-image').onclick = function () {
    this.classList.toggle('big-img')
}

const ch_ids = ['size_s', 'size_m', 'size_l', 'size_xl']
const ch_names = ['S', 'M', 'L', 'XL']
const Order = () => {
    let sizes = []
    ch_ids.forEach((id, i) => {
        if (getElement(id).checked) sizes.push(ch_names[i])
    })
    if (sizes.length == 0) return null
    const text = getElement('quantity').value
    if (text.length == 0) return null
    for (const c of text) if (!(c >= '0' && c <= '9')) return null
    let n = parseInt(text)
    if (n == 0 || n >= 10000) return null
    let ans = `Za isporuku:\n`
    const { name, price } = products[product_index]
    ans += `${name} / ${price} RSD\n`
    sizes.forEach(name => {
        ans += `${name} (${n} kom.) `
    })
    n *= sizes.length
    ans += `\nukupno: ${n} kom. / ${n * price} RSD`
    return ans
}

getElement('order-button').onclick = () => {
    const text = Order()
    alert(text == null ? 'Podaci nisu pravilno uneti' : text)
}