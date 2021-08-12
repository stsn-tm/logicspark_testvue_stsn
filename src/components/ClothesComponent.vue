<template>
  <div>
    <b-container style="margin-top:20px;">
      <h4 style="margin:0px;">Clothing ({{items.length}})</h4>
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
                    {{item.subtitle}}
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
          _id: 'c0001',
          title: 'Nike Pro Dri-FIT',
          subtitle: 'Men Tank',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82b13880-06c3-4a46-a73d-d920655c8817/pro-dri-fit-mens-tank-mzxgJr.png',
          price: 35
        },
        {
          _id: 'c0002',
          title: 'Nike Run Division',
          subtitle: 'Women Engineered Running Tank',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95b49bb7-f5a6-4cb6-af6e-5176dc682a2c/run-division-womens-engineered-running-tank-PnsS51.png',
          price: 60
        },
        {
          _id: 'c0003',
          title: 'Nike Sportswear Magic Club',
          subtitle: 'Big Kids (Boys) Tie-Dye Crew',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d093fbdd-d540-4e5f-ade7-b7f185ceca27/sportswear-magic-club-big-kids-boys-tie-dye-crew-V0KvqW.png',
          price: 45
        },
        {
          _id: 'c0004',
          title: 'Nike Sportswear',
          subtitle: 'Women Fleece Pullover (Plus Size)',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f99e1011-88be-4a52-8783-df8889767d79/sportswear-womens-fleece-pullover-plus-size-JzbG3R.png',
          price: 65
        },
        {
          _id: 'c0005',
          title: 'Nike Sportswear',
          subtitle: 'Big Kids (Boys) Jersey Hoodie',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdfaabb2-aec9-469a-9027-69034b15a51d/sportswear-big-kids-boys-jersey-hoodie-kn0wwz.png',
          price: 35
        },
        {
          _id: 'c0006',
          title: 'Nike Dri-FIT Standard Issue',
          subtitle: 'Men Full-Zip Basketball Hoodie',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24f58b26-9f4b-45aa-bb97-0b2199f0873d/dri-fit-standard-issue-mens-full-zip-basketball-hoodie-j4WHn6.png',
          price: 90
        },
        {
          _id: 'c0007',
          title: 'Nike Sportswear Windrunner',
          subtitle: 'Men Hooded Jacket',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02771a24-cd85-477c-9ef2-2c66b03f764c/sportswear-windrunner-mens-hooded-jacket-5hK13x.png',
          price: 100
        },
        {
          _id: 'c0008',
          title: 'Nike Tempo',
          subtitle: 'Women Running Shorts',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f51d099f-8bb1-43b9-a32a-25c30aa8b730/tempo-womens-running-shorts-96l2HW.png',
          price: 30
        },
        {
          _id: 'c0009',
          title: 'Nike Sportswear',
          subtitle: 'Women Skirt',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/999707ce-4755-49ae-9c16-ee167f37a567/sportswear-womens-skirt-Fwz4m8.png',
          price: 50
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
