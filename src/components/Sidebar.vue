<template>
    <aside id="sidebar">
        <nav>
            <ul>
                <li><router-link to="/" exact-active-class="active">🏠 Home</router-link></li>
                <li><router-link to="/">📈 Analytics</router-link></li>
                <li><router-link to="/">👩 Reach</router-link></li>
                <li><router-link to="/">📅 Campaign</router-link></li>
                <li><router-link to="/">⚙️ Publishing</router-link></li>
                <li><router-link to="/">🔧 Manage Account</router-link></li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped lang="scss">
$mine-shaft: #333333;
#sidebar {
  position: absolute;
  height: 100%;
  width: 215px;

  background-color: $mine-shaft;
  color: #ffffff;
  text-align: left;

  ul {
    list-style-type: none;
    padding: 0;

    li a {
      display: block;
      padding: 15px 15px;
      position: relative;

      text-decoration: none;
      color: #ffffff;
      font-family: "Calibri";
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
      border-left: 5px rgba(255, 255, 255, 0.1) solid;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: inset 0 -1px rgba(0, 0, 0, 0.2);

      &.active {
        background-color: #444444;
        border-left-color: #12a0ea;
      }

      &:hover {
        background-color: #444444;
        border-left-color: #12a0ea;
      }
    }
  }
}
</style>
