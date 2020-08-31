<template>
  <div>
    <span>
      <slot :userName="user" name="header">
        {{ user.firstName }}
      </slot>
      <slot :hobbyData="hobby" name="footer">
        {{ hobby.fruit }}
      </slot>
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
      hobby: {
        fruit: 'apple',
        color: 'blue',
      },
    };
  },
}
</script>