export interface PaymentDetails {
    accounts_info: any; // Tipo real deve ser fornecido
    acquirer_reconciliation: any[]; // Tipo real deve ser fornecido
    additional_info: {
      authentication_code: string | null;
      available_balance: number | null;
      ip_address: string;
      items: {
        category_id: string | null;
        description: string | null;
        id: string | null;
        picture_url: string;
        quantity: string;
        title: string;
        unit_price: string;
      }[];
      nsu_processadora: string | null;
    };
    authorization_code: string;
    binary_mode: boolean;
    brand_id: string | null;
    build_version: string;
    call_for_authorize_id: string | null;
    captured: boolean;
    card: {
      bin: string;
      cardholder: {
        identification: {
          number: string | null;
          type: string | null;
        };
        name: string;
      };
      date_created: string;
      date_last_updated: string;
      expiration_month: number;
      expiration_year: number;
      first_six_digits: string;
      id: string | null;
      last_four_digits: string;
    };
    charges_details: {
      accounts: {
        from: string;
        to: string;
      };
      amounts: {
        original: number;
        refunded: number;
      };
      client_id: number;
      date_created: string;
      id: string;
      last_updated: string;
      metadata: Record<string, any>; // Tipo real deve ser fornecido
      name: string;
      refund_charges: any[]; // Tipo real deve ser fornecido
      reserve_id: string | null;
      type: string;
    }[];
    collector_id: number;
    corporation_id: string | null;
    counter_currency: string | null;
    coupon_amount: number;
    currency_id: string;
    date_approved: string;
    date_created: string;
    date_last_updated: string;
    date_of_expiration: string | null;
    deduction_schema: string | null;
    description: string;
    differential_pricing_id: string | null;
    external_reference: string | null;
    fee_details: {
      amount: number;
      fee_payer: string;
      type: string;
    }[];
    financing_group: string | null;
    id: number;
    installments: number;
    integrator_id: string | null;
    issuer_id: string;
    live_mode: boolean;
    marketplace_owner: string | null;
    merchant_account_id: string | null;
    merchant_number: string | null;
    metadata: Record<string, any>; // Tipo real deve ser fornecido
    money_release_date: string;
    money_release_schema: string | null;
    money_release_status: string | null;
    notification_url: string | null;
    operation_type: string;
    order: {
      id: string;
      type: string;
    };
    payer: {
      email: string;
      entity_type: string | null;
      first_name: string | null;
      id: string;
      identification: {
        number: string | null;
        type: string | null;
      };
      last_name: string | null;
      operator_id: string | null;
      phone: {
        area_code: string | null;
        extension: string | null;
        number: string | null;
      };
      type: string | null;
    };
    payment_method: {
      id: string;
      issuer_id: string;
      type: string;
    };
    payment_method_id: string;
    payment_type_id: string;
    platform_id: string | null;
    point_of_interaction: {
      business_info: {
        sub_unit: string;
        unit: string;
      };
      transaction_data: {
        e2e_id: string | null;
      };
      type: string;
    };
    pos_id: string | null;
    processing_mode: string;
    refunds: any[]; // Tipo real deve ser fornecido
    shipping_amount: number;
    sponsor_id: string | null;
    statement_descriptor: string;
    status: string;
    status_detail: string;
    store_id: string | null;
    tags: any[]; // Tipo real deve ser fornecido
    taxes_amount: number;
    transaction_amount: number;
    transaction_amount_refunded: number;
    transaction_details: {
      acquirer_reference: string | null;
      external_resource_url: string | null;
      financial_institution: string | null;
      installment_amount: number;
      net_received_amount: number;
      overpaid_amount: number;
      payable_deferral_period: string | null;
      payment_method_reference_id: string | null;
      total_paid_amount: number;
    };
  }
