<template>
  <div>
    <b-container style="margin-top:20px;">
      <h4 style="margin:0px;">Shoes ({{items.length}})</h4>
      <div style="margin-top:20px;">
        <b-row>
          <b-col md="4" v-for="item in items" :key="item._id">
            <b-card
              :title="item.title"
              :img-src="item.img"
              img-alt="Image"
              img-top
              tag="article"
              border-variant="white"
              title-tag="h6"
            >
              <b-card-text class="b-card-text">
                <b-row>
                  <b-col cols="8">
                    {{item.type}}
                  </b-col>
                  <b-col cols="4" style="text-align:right;">
                    ${{item.price}}
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          _id: 's0001',
          title: 'Nike Blazer Mid 77 SE',
          type: 'Women Shoes',
          img: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_415,c_limit/146a12c7-fcaa-4c55-b76d-16af9d00fa52/blazer-mid-77-se-womens-shoes-25h71W.png',
          price: 110
        },
        {
          _id: 's0002',
          title: 'Nike Air Force 1 Shadow',
          type: 'Women Shoes',
          img: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_415,c_limit/6122e8f2-b92d-4bb8-98de-92d5e4be1cd2/air-force-1-shadow-womens-shoes-kTgn9J.png',
          price: 110
        },
        {
          _id: 's0003',
          title: 'Nike Air Force 1 LV8',
          type: 'Big Kids Shoes',
          img: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_415,c_limit/b150cf03-eeed-4e1d-a130-89ad7f87b714/air-force-1-lv8-big-kids-shoes-NSNB97.png',
          price: 90
        },
        {
          _id: 's0004',
          title: 'Jordan 1 Low',
          type: 'Little Kids Shoes',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58adedf8-0167-4af5-828c-5852ac2b1552/jordan-1-low-little-kids-shoes-tp77qB.png',
          price: 60
        },
        {
          _id: 's0005',
          title: 'Nike Air Force 1 07',
          type: 'Women Shoes',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-GCkPzr.png',
          price: 70
        },
        {
          _id: 's0006',
          title: 'Nike Air Max 270',
          type: 'Men Shoes',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png',
          price: 150
        }
      ]

    }
  }
}
</script>

<style scoped>
.b-card-text {
  font-size:14px !important;
  color:#757575 !important;
}
</style>
