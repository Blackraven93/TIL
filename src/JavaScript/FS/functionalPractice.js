const users = [
  {
    email: 'john@coldmail.com',
    rec_count: 2,
  },
  {
    email: 'sam@pmail.co',
    rec_count: 16,
  },
  {
    email: 'linda1989@oal.com',
    rec_count: 1,
  },
  {
    email: 'jan1940@ahoy.com',
    rec_count: 0,
  },
  {
    email: 'mrbig@pmail.co',
    rec_count: 25,
  },
  {
    email: 'lol@lol.lol',
    rec_count: 0,
  },
];

const coupons = [
  {
    code: 'MAYDISCOUNT',
    rank: 'good',
  },
  {
    code: '10PERCENT',
    rank: 'bad',
  },
  {
    code: 'PROMOTION45',
    rank: 'best',
  },
  {
    code: 'IHEARTYOU',
    rank: 'bad',
  },
  {
    code: 'GETADEAL',
    rank: 'best',
  },
  {
    code: 'ILIKEDISCOUNTS',
    rank: 'good',
  },
];

const subScriber = users.filter((user) => user['email'] === 'sam@pmail.co')[0];

const best = 'best';
const good = 'good';
const bad = 'bad';

const subCouponRank = (subScriber) => {
  return subScriber['rec_count'] >= 10 ? 'best' : 'good';
};

console.log(subCouponRank(subScriber));

const newCoupon = coupons[1];

const selectCouponsByRank = (coupons, rank) => {
  return Array.from(coupons)
    .filter((coupon) => coupon.rank === rank)
    .map((coupon) => coupon.code);
};

console.log(selectCouponsByRank(coupons, bad));

const message = {
  from: 'newsletter@coupon.co',
  to: 'sam@pmail.com',
  subject: 'Your weekly coupons inside',
  body: 'Here are your coupons ...',
};
