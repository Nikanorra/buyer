<template>
  <div class="check-email">
    <div class="container">
      <div class="success__wrap">
        <svg
          width="176"
          height="138"
          viewBox="0 0 176 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse
            cx="84.4801"
            cy="77.1864"
            rx="61.0133"
            ry="60.8136"
            fill="#FF9B30" />
          <ellipse
            opacity="0.5"
            cx="170.132"
            cy="36.2544"
            rx="5.86667"
            ry="5.84745"
            fill="#FF9B30" />
          <ellipse
            opacity="0.5"
            cx="5.86667"
            cy="94.7288"
            rx="5.86667"
            ry="5.84746"
            fill="#FF9B30" />
          <ellipse
            opacity="0.5"
            cx="118.508"
            cy="3.50847"
            rx="3.52"
            ry="3.50847"
            fill="#FF9B30" />
          <ellipse
            opacity="0.5"
            cx="10.561"
            cy="36.2543"
            rx="3.52"
            ry="3.50847"
            fill="#FF9B30" />
          <ellipse
            opacity="0.5"
            cx="160.747"
            cy="104.085"
            rx="3.52"
            ry="3.50846"
            fill="#FF9B30" />
          <path
            d="M82.5608 90.7467C80.7231 92.5784 77.7412 92.5784 75.9044 90.7467L65.5912 80.4673C63.7535 78.6365 63.7535 75.6644 65.5912 73.8336C67.428 72.0019 70.4099 72.0019 72.2476 73.8336L78.3922 79.9572C78.8561 80.4186 79.6091 80.4186 80.0738 79.9572L96.7117 63.3738C98.5485 61.5421 101.53 61.5421 103.368 63.3738C104.251 64.2534 104.746 65.4468 104.746 66.6906C104.746 67.9345 104.251 69.1279 103.368 70.0075L82.5608 90.7467Z"
            fill="white" />
        </svg>

        <h1>Success!</h1>
        <p>Check you email, please</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.check-email .container {
  display: grid;
  grid-template-areas: "emptyLeft content emptyRight";
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: 1fr;
}
.success__wrap {
  grid-area: content;
  margin-bottom: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    margin-bottom: 45px;
    height: 176px;
    animation: fading 2s 1;
    animation-timing-function: linear;
  }
  h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 17px;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #8c8c8c;
    margin-bottom: 73px;
  }
}

@keyframes fading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
