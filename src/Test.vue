<template>
  <div>
    <span>
      <!-- 绑定在 <slot> 元素上的 attribute 被称为插槽 prop -->
      <slot :userName="user">{{user.firstName}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'grace',
        lastName: 'haLi',
      },
    };
  },
}
</script>