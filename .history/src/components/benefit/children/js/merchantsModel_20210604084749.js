
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default function merchantsModel() {

  const state = reactive({
    coupons: [coupon],
    showList: false,
    chosenCoupon: -1,
  });

  const onChange = (index) => {
    state.showList = false;
    state.chosenCoupon = index;
  };
  const onExchange = (code) => {
    state.coupons.push(coupon);
  };

  return {
    state,
    onChange,
    onExchange,
    disabledCoupons: [coupon],
  };


}