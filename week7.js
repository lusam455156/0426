var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "呂昇展",
          cover:
            "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
          address: "淡江大學",
          tel: "教育科技系2B",
          opentime: "20021019",
          title_url: "https://www.instagram.com/_sam_lu1019/",
          bgimage: ""
        },
        {
            title: "小光",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "寵物貓",
            tel: "虎斑貓",
            opentime: "6月12日出生",
            title_url: "https://www.instagram.com/_sam_lu1019/",
            bgimage: ""
          },
          {
            title: "Coffee",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "寵物狗",
            tel: "柯基混柴犬",
            opentime: "6月6日",
            title_url: "https://www.instagram.com/_sam_lu1019/",
            bgimage: ""
          },
          {
            title: "𝝅𝝅",
            cover:
              "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
            address: "寵物貓",
            tel: "加菲貓",
            opentime: "3~4歲",
            title_url: "https://www.instagram.com/_sam_lu1019/",
            bgimage: ""
          },

          
		],
    },
    
    mounted:function(){        
        const swiper = new Swiper('.carousel', {
            loop: true,
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            }
        });  

        }
  });
