<template>
  <div>
    <div>
      <b-navbar toggleable="sm" type="light" variant="light" sticky>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand to="/" style="margin-left:10px">BV Shop</b-navbar-brand>

        <b-collapse id="nav-text-collapse" class="justify-content-md-center" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/clothing" style="margin-right:10px;">Clothing</b-nav-item>
            <b-nav-item to="/shoes" style="margin-right:10px;">Shoes</b-nav-item>
            <b-nav-item to="/accessories">Accessories</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Prompt");

html,
body {
  font-family: "Prompt", sans-serif !important;
}
</style>
