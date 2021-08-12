<template>
  <div>
    <div>
      <b-img
        style="width: 100%; height:auto;"
        src="https://storage.googleapis.com/tradeinn-images/images/landing-pages/Nike-Peg37-1.jpg"
      ></b-img>
    </div>

    <b-container style="margin-top:20px;">
      <div>
        <b-row style="margin-top:40px;">
          <b-col>
            <h4 style="margin:0px;">Clothing</h4>
          </b-col>
          <b-col style="text-align:right;">
            <p class="click-more" @click="moreClothing">more</p>
          </b-col>
        </b-row>
        <div style="margin-top:20px;">
          <b-row>
            <b-col class="d-flex align-items-stretch" md="4" v-for="item in clothesData" :key="item._id">
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
                      {{ item.subtitle }}
                    </b-col>
                    <b-col cols="4" style="text-align:right;"> ${{ item.price }} </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>

      <div style="margin-top:20px;">
        <b-row style="margin-top:40px;">
          <b-col>
            <h4 style="margin:0px;">Shoes</h4>
          </b-col>
          <b-col style="text-align:right;">
            <p class="click-more" @click="moreShoes">more</p>
          </b-col>
        </b-row>
        <div style="margin-top:20px;">
          <b-row>
            <b-col class="align-items-stretch" md="4" v-for="item in shoesData" :key="item._id">
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
                      {{ item.subtitle }}
                    </b-col>
                    <b-col cols="4" style="text-align:right;"> ${{ item.price }} </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>

      <div style="margin-top:20px;">
        <b-row style="margin-top:40px;">
          <b-col>
            <h4 style="margin:0px;">Accessories</h4>
          </b-col>
          <b-col style="text-align:right;">
            <p class="click-more" @click="moreAccessories">more</p>
          </b-col>
        </b-row>
        <div style="margin-top:20px;">
          <b-row>
            <b-col class="d-flex align-items-stretch" md="4" v-for="item in accessoriesData" :key="item._id">
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
                      {{ item.subtitle }}
                    </b-col>
                    <b-col cols="4" style="text-align:right;"> ${{ item.price }} </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clothesData: [
        {
          _id: 'c0001',
          title: 'Nike Pro Dri-FIT',
          subtitle: 'Men Tank',
          img:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/82b13880-06c3-4a46-a73d-d920655c8817/pro-dri-fit-mens-tank-mzxgJr.png',
          price: 35
        },
        {
          _id: 'c0002',
          title: 'Nike Run Division',
          subtitle: 'Women Engineered Running Tank',
          img:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95b49bb7-f5a6-4cb6-af6e-5176dc682a2c/run-division-womens-engineered-running-tank-PnsS51.png',
          price: 60
        },
        {
          _id: 'c0003',
          title: 'Nike Sportswear Magic Club',
          subtitle: 'Big Kids (Boys) Tie-Dye Crew',
          img:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d093fbdd-d540-4e5f-ade7-b7f185ceca27/sportswear-magic-club-big-kids-boys-tie-dye-crew-V0KvqW.png',
          price: 45
        }
      ],
      shoesData: [
        {
          _id: 's0001',
          title: 'Nike Blazer Mid 77 SE',
          subtitle: 'Women Shoes',
          img:
            'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_415,c_limit/146a12c7-fcaa-4c55-b76d-16af9d00fa52/blazer-mid-77-se-womens-shoes-25h71W.png',
          price: 110
        },
        {
          _id: 's0002',
          title: 'Nike Air Force 1 Shadow',
          subtitle: 'Women Shoes',
          img:
            'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_415,c_limit/6122e8f2-b92d-4bb8-98de-92d5e4be1cd2/air-force-1-shadow-womens-shoes-kTgn9J.png',
          price: 110
        },
        {
          _id: 's0003',
          title: 'Nike Air Force 1 LV8',
          subtitle: 'Big Kids Shoes',
          img:
            'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_415,c_limit/b150cf03-eeed-4e1d-a130-89ad7f87b714/air-force-1-lv8-big-kids-shoes-NSNB97.png',
          price: 90
        }
      ],
      accessoriesData: [
        {
          _id: 'a0001',
          title: 'Giannis Heritage86 "Freak"',
          subtitle: 'Cap',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86ce92d8-a47b-45fd-987e-ce9edbecc838/giannis-heritage86-freak-cap-XtRmBq.png',
          price: 30
        },
        {
          _id: 'a0002',
          title: 'Nike Heritage',
          subtitle: 'Waistpack',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f40f4c9-aaa1-4c97-bcc3-6adefd584e71/heritage-waistpack-fvQD5x.png',
          price: 25
        },
        {
          _id: 'a0003',
          title: 'Nike Air Hayward',
          subtitle: 'Backpack',
          img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a068028-c1f4-4a12-8b76-4c8ebc5b45bc/air-hayward-backpack-sMPZ9B.png',
          price: 55
        }
      ]
    }
  },
  methods: {
    moreClothing () {
      this.$router.push({ path: '/clothing' })
    },
    moreShoes () {
      this.$router.push({ path: '/shoes' })
    },
    moreAccessories () {
      this.$router.push({ path: '/accessories' })
    }
  }
}
</script>

<style scoped>
.b-card-text {
  font-size:14px !important;
  color:#757575 !important;
}
.click-more {
  margin:0px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
