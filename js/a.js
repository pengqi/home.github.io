function get_page_num() {
    a = document.querySelector("#panel > p")
    b = a.innerText
    return Number(b)
}


function change_page_num(new_page_num) {
    
    a = document.querySelector("#panel > p")
    a.innerText = String(new_page_num)
}


function get_total_ls() {
    let ls1 = [
        ["https://pengqi.xyz", "blog"],
        ["https://pengqi.xyz/about/", "about"],
        ['https://photo.pengqi.xyz:300', 'photo'],
        ["https://share.pengqi.xyz:300", "share"],
        ["https://rsshub.pengqi.xyz:300", "rsshub"]
    ]

    let ls2 = [
        ['https://pan.pengqi.xyz:300/#!/downloading', 'AriaNg'],
        ["https://cloud.pengqi.xyz:300", "cloud"]
    ]

    let total_ls = [ls1, ls2]
    return total_ls
}

function next() {
    let a1 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(1) > a")
    let a2 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(2) > a")
    let a3 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(3) > a")
    let a4 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(4) > a")
    let a5 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(5) > a")
    let elements = [a1, a2, a3, a4, a5]


    //一个ls代表一页
    total_ls = get_total_ls()

    page_num = get_page_num() + 1
    change_page_num(page_num)

    // if (page_num >= total_ls.length) {
    //     alert('到底了')
    // }

    ls = total_ls[page_num]
    //alert(ls[0][1])
    let num = Array.from({length:elements.length}, (item, index)=> index)
    for (let i of num) {

        if (ls.length > i) {
            let link = ls[i][0]
            let innerText = ls[i][1]

            a = elements[i]
            a.href = link;
            a.innerText = innerText;
        } else {
            let link = ''
            let innerText = ''

            a = elements[i]
            a.href = link;
            a.innerText = innerText;
        }

    }

}


function last() {
    let a1 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(1) > a")
    let a2 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(2) > a")
    let a3 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(3) > a")
    let a4 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(4) > a")
    let a5 = document.querySelector("#panel > div.panel-main > div.panel-main__inner.panel-inverted > div > div.navigation-wrapper.iUp.up > div:nth-child(1) > nav > ul > li:nth-child(5) > a")
    let elements = [a1, a2, a3, a4, a5]


    //一个ls代表一页
    total_ls = get_total_ls()

    page_num = get_page_num() - 1
    change_page_num(page_num)
    // if (page_num == -1) {
    //     alert('已经是首页了')
    // }

    ls = total_ls[page_num]
    //alert(ls[0][1])
    let num = Array.from({length:elements.length}, (item, index)=> index)
    for (let i of num) {

 
        let link = ls[i][0]
        let innerText = ls[i][1]

        a = elements[i]
        a.href = link;
        a.innerText = innerText;


    }


}


