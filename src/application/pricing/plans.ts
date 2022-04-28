import { SubscriptionProductDto } from "@/application/dtos/core/subscriptions/SubscriptionProductDto";
import { SubscriptionBillingPeriod } from "@/application/enums/core/subscriptions/SubscriptionBillingPeriod";
import { SubscriptionPriceType } from "@/application/enums/core/subscriptions/SubscriptionPriceType";

const currency = import.meta.env.VUE_APP_CURRENCY?.toString() ?? "usd";
const plans: SubscriptionProductDto[] = [
  {
    serviceId: "",
    id: undefined,
    tier: 1,
    title: "pricing.products.plan1.title",
    description: "pricing.products.plan1.description",
    contactUs: false,
    prices: [
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.MONTHLY,
        price: 0,
        currency,
        trialDays: 0,
        active: true,
      },
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.YEARLY,
        price: 0,
        currency,
        trialDays: 0,
        active: true,
      },
    ],
    features: [
      {
        id: undefined,
        order: 1,
        key: "pricing.features.oneLink",
        value: "1",
        included: true,
      },
      {
        id: undefined,
        order: 2,
        key: "pricing.features.oneContract",
        value: "1",
        included: true,
      },
      {
        id: undefined,
        order: 3,
        key: "pricing.features.maxUsers",
        value: "2",
        included: true,
      },
      {
        id: undefined,
        order: 4,
        key: "pricing.features.oneWorkspace",
        value: "1",
        included: true,
      },
      {
        id: undefined,
        order: 5,
        key: "pricing.features.maxStorage",
        value: "1 GB",
        included: true,
      },
      {
        id: undefined,
        order: 6,
        key: "pricing.features.prioritySupport",
        value: "",
        included: false,
      },
    ],
    badge: "",
    active: true,
    maxUsers: 2,
    maxWorkspaces: 1,
    maxLinks: 1,
    maxStorage: 1024,
    monthlyContracts: 1,
  },
  {
    serviceId: "",
    id: undefined,
    tier: 2,
    title: "pricing.products.plan2.title",
    description: "pricing.products.plan2.description",
    contactUs: false,
    prices: [
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.MONTHLY,
        price: 199,
        currency,
        trialDays: 30,
        active: true,
      },
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.YEARLY,
        price: 1999,
        currency,
        trialDays: 0,
        active: true,
      },
    ],
    features: [
      {
        id: undefined,
        order: 1,
        key: "pricing.features.maxLinks",
        value: "45",
        included: true,
      },
      {
        id: undefined,
        order: 2,
        key: "pricing.features.maxContracts",
        value: "45",
        included: true,
      },
      {
        id: undefined,
        order: 3,
        key: "pricing.features.maxUsers",
        value: "5",
        included: true,
      },
      {
        id: undefined,
        order: 4,
        key: "pricing.features.maxWorkspaces",
        value: "2",
        included: true,
      },
      {
        id: undefined,
        order: 5,
        key: "pricing.features.maxStorage",
        value: "100 GB",
        included: true,
      },
      {
        id: undefined,
        order: 6,
        key: "pricing.features.prioritySupport",
        value: "",
        included: false,
      },
    ],
    badge: "pricing.recommended",
    active: true,
    maxUsers: 5,
    maxWorkspaces: 3,
    maxLinks: 45,
    maxStorage: 100 * 1024,
    monthlyContracts: 45,
  },
  {
    serviceId: "",
    id: undefined,
    tier: 3,
    title: "pricing.products.plan3.title",
    description: "pricing.products.plan3.description",
    contactUs: false,
    prices: [
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.MONTHLY,
        price: 399,
        currency,
        trialDays: 30,
        active: true,
      },
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.YEARLY,
        price: 3999,
        currency,
        trialDays: 0,
        active: true,
      },
    ],
    features: [
      {
        id: undefined,
        order: 1,
        key: "pricing.features.maxLinks",
        value: "100",
        included: true,
      },
      {
        id: undefined,
        order: 2,
        key: "pricing.features.maxContracts",
        value: "90",
        included: true,
      },
      {
        id: undefined,
        order: 3,
        key: "pricing.features.maxUsers",
        value: "12",
        included: true,
      },
      {
        id: undefined,
        order: 4,
        key: "pricing.features.maxWorkspaces",
        value: "5",
        included: true,
      },
      {
        id: undefined,
        order: 5,
        key: "pricing.features.maxStorage",
        value: "500 GB",
        included: true,
      },
      {
        id: undefined,
        order: 6,
        key: "pricing.features.prioritySupport",
        value: "",
        included: true,
      },
    ],
    badge: "",
    active: true,
    maxUsers: 12,
    maxWorkspaces: 5,
    maxLinks: 100,
    maxStorage: 500 * 1024,
    monthlyContracts: 90,
  },
  {
    serviceId: "",
    id: undefined,
    tier: 4,
    title: "pricing.products.plan4.title",
    description: "pricing.products.plan4.description",
    contactUs: true,
    prices: [
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.MONTHLY,
        price: 0,
        currency,
        trialDays: 0,
        active: true,
      },
      {
        serviceId: "",
        id: undefined,
        type: SubscriptionPriceType.RECURRING,
        billingPeriod: SubscriptionBillingPeriod.YEARLY,
        price: 0,
        currency,
        trialDays: 0,
        active: true,
      },
    ],
    features: [
      {
        id: undefined,
        order: 1,
        key: "pricing.features.maxLinks",
        value: "100+",
        included: true,
      },
      {
        id: undefined,
        order: 2,
        key: "pricing.features.maxContracts",
        value: "90+",
        included: true,
      },
      {
        id: undefined,
        order: 3,
        key: "pricing.features.maxUsers",
        value: "12+",
        included: true,
      },
      {
        id: undefined,
        order: 4,
        key: "pricing.features.maxWorkspaces",
        value: "5+",
        included: true,
      },
      {
        id: undefined,
        order: 5,
        key: "pricing.features.maxStorage",
        value: "500+ GB",
        included: true,
      },
      {
        id: undefined,
        order: 6,
        key: "pricing.features.prioritySupport",
        value: "",
        included: false,
      },
    ],
    badge: "",
    active: true,
    maxUsers: 12,
    maxWorkspaces: 5,
    maxLinks: 100,
    maxStorage: 0,
    monthlyContracts: 90,
  },
];

export default plans;
