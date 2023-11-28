<template lang="html">
  <div class="event-plan">
    <ul class="list">
      <li>12:00 — «Кукла».Стоимость: 350 000 сумов;</li>
      <li>12:00 — «Картины».Стоимость: 280 000 сумов; </li>
      <li>13:00 — «Гвоздетерапия».Стоимость: 200 000 сумов; </li>
      <li>16:00 — «Урок самомассажа лица».Стоимость: 200 000 сумов; </li>
      <li>17:00 — «Букет с флористом».Стоимость: 280 000 сумов.</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 16px;
}
.list li {
  color: #020105;
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  list-style: disc;
}
</style>
