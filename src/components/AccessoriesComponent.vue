<template>
  <div>
    <b-container style="margin-top:20px;">
      <h4 style="margin:0px;">Accessories ({{items.length}})</h4>
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
  }
}
</script>

<style scoped>
.b-card-text {
  font-size:14px !important;
  color:#757575 !important;
}
</style>
