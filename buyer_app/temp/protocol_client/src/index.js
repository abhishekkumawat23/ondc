/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {Ack} from './model/Ack';
import {AddOn} from './model/AddOn';
import {Address} from './model/Address';
import {Agent} from './model/Agent';
import {AllOfProviderLocationsItems} from './model/AllOfProviderLocationsItems';
import {Authorization} from './model/Authorization';
import {Billing} from './model/Billing';
import {CancelBody} from './model/CancelBody';
import {CancelMessage} from './model/CancelMessage';
import {Cancellation} from './model/Cancellation';
import {CancellationReasonsBody} from './model/CancellationReasonsBody';
import {CancellationReasonsMessage} from './model/CancellationReasonsMessage';
import {CancellationSelectedReason} from './model/CancellationSelectedReason';
import {Catalog} from './model/Catalog';
import {Category} from './model/Category';
import {Circle} from './model/Circle';
import {City} from './model/City';
import {ConfirmBody} from './model/ConfirmBody';
import {Contact} from './model/Contact';
import {Context} from './model/Context';
import {Country} from './model/Country';
import {DecimalValue} from './model/DecimalValue';
import {Descriptor} from './model/Descriptor';
import {Dimensions} from './model/Dimensions';
import {Document} from './model/Document';
import {Domain} from './model/Domain';
import {Duration} from './model/Duration';
import {Error} from './model/Error';
import {Feedback} from './model/Feedback';
import {FeedbackCategoriesBody} from './model/FeedbackCategoriesBody';
import {FeedbackForm} from './model/FeedbackForm';
import {FeedbackFormBody} from './model/FeedbackFormBody';
import {FeedbackFormElement} from './model/FeedbackFormElement';
import {FeedbackUrl} from './model/FeedbackUrl';
import {FeedbackUrlParams} from './model/FeedbackUrlParams';
import {Fulfillment} from './model/Fulfillment';
import {FulfillmentCustomer} from './model/FulfillmentCustomer';
import {FulfillmentEnd} from './model/FulfillmentEnd';
import {FulfillmentStart} from './model/FulfillmentStart';
import {GetCancellationReasonsBody} from './model/GetCancellationReasonsBody';
import {GetFeedbackCategoriesBody} from './model/GetFeedbackCategoriesBody';
import {GetFeedbackFormBody} from './model/GetFeedbackFormBody';
import {GetFeedbackFormMessage} from './model/GetFeedbackFormMessage';
import {GetRatingCategoriesBody} from './model/GetRatingCategoriesBody';
import {GetReturnReasonsBody} from './model/GetReturnReasonsBody';
import {Gps} from './model/Gps';
import {Image} from './model/Image';
import {InitBody} from './model/InitBody';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse200Message} from './model/InlineResponse200Message';
import {Intent} from './model/Intent';
import {Item} from './model/Item';
import {ItemOndcorgstatutoryReqsPackagedCommodities} from './model/ItemOndcorgstatutoryReqsPackagedCommodities';
import {ItemOndcorgstatutoryReqsPrepackagedFood} from './model/ItemOndcorgstatutoryReqsPrepackagedFood';
import {ItemQuantity} from './model/ItemQuantity';
import {ItemQuantityAllocated} from './model/ItemQuantityAllocated';
import {ItemQuantityMaximum} from './model/ItemQuantityMaximum';
import {Language} from './model/Language';
import {Location} from './model/Location';
import {Name} from './model/Name';
import {Offer} from './model/Offer';
import {OnCancelBody} from './model/OnCancelBody';
import {OnConfirmBody} from './model/OnConfirmBody';
import {OnInitBody} from './model/OnInitBody';
import {OnRatingBody} from './model/OnRatingBody';
import {OnSearchBody} from './model/OnSearchBody';
import {OnSearchMessage} from './model/OnSearchMessage';
import {OnSelectBody} from './model/OnSelectBody';
import {OnStatusBody} from './model/OnStatusBody';
import {OnSupportBody} from './model/OnSupportBody';
import {OnSupportMessage} from './model/OnSupportMessage';
import {OnTrackBody} from './model/OnTrackBody';
import {OnTrackMessage} from './model/OnTrackMessage';
import {OnUpdateBody} from './model/OnUpdateBody';
import {Operator} from './model/Operator';
import {OperatorExperience} from './model/OperatorExperience';
import {Option} from './model/Option';
import {Order} from './model/Order';
import {OrderAddOns} from './model/OrderAddOns';
import {OrderItems} from './model/OrderItems';
import {OrderOffers} from './model/OrderOffers';
import {OrderOndcorglinkedOrders} from './model/OrderOndcorglinkedOrders';
import {OrderProvider} from './model/OrderProvider';
import {OrderProviderLocations} from './model/OrderProviderLocations';
import {Organization} from './model/Organization';
import {Page} from './model/Page';
import {Payment} from './model/Payment';
import {PaymentOndcorgsettlementDetails} from './model/PaymentOndcorgsettlementDetails';
import {PaymentParams} from './model/PaymentParams';
import {Person} from './model/Person';
import {Policy} from './model/Policy';
import {Price} from './model/Price';
import {Provider} from './model/Provider';
import {Quotation} from './model/Quotation';
import {QuotationBreakup} from './model/QuotationBreakup';
import {Rateable} from './model/Rateable';
import {Rating} from './model/Rating';
import {RatingAck} from './model/RatingAck';
import {RatingBody} from './model/RatingBody';
import {RatingCategoriesBody} from './model/RatingCategoriesBody';
import {ReturnReasonsBody} from './model/ReturnReasonsBody';
import {Scalar} from './model/Scalar';
import {ScalarRange} from './model/ScalarRange';
import {Schedule} from './model/Schedule';
import {SearchBody} from './model/SearchBody';
import {SearchMessage} from './model/SearchMessage';
import {SelectBody} from './model/SelectBody';
import {SelectMessage} from './model/SelectMessage';
import {State} from './model/State';
import {StatusBody} from './model/StatusBody';
import {StatusMessage} from './model/StatusMessage';
import {Subscriber} from './model/Subscriber';
import {Support} from './model/Support';
import {SupportBody} from './model/SupportBody';
import {SupportMessage} from './model/SupportMessage';
import {Tags} from './model/Tags';
import {Time} from './model/Time';
import {TimeRange} from './model/TimeRange';
import {TrackBody} from './model/TrackBody';
import {TrackMessage} from './model/TrackMessage';
import {Tracking} from './model/Tracking';
import {TrackingData} from './model/TrackingData';
import {UpdateBody} from './model/UpdateBody';
import {UpdateMessage} from './model/UpdateMessage';
import {Vehicle} from './model/Vehicle';
import {BuyerAppMetaAPIsApi} from './api/BuyerAppMetaAPIsApi';
import {ONDCBuyerAppApi} from './api/ONDCBuyerAppApi';
import {ONDCGatewayApi} from './api/ONDCGatewayApi';
import {ONDCSellerAppApi} from './api/ONDCSellerAppApi';
import {SellerAppMetaAPIsApi} from './api/SellerAppMetaAPIsApi';
import {SellerMetaAPIsApi} from './api/SellerMetaAPIsApi';

/**
* ONDC_Protocol_API_specification_which_includes_statutory_requirements_for_packaged_commodities_and_pre_packaged_food_This_is_an_adaptation_of_Beckn_Core_version_0_9_3.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OndcProtocolApiForRetailGroceryFb = require('index'); // See note below*.
* var xxxSvc = new OndcProtocolApiForRetailGroceryFb.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OndcProtocolApiForRetailGroceryFb.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OndcProtocolApiForRetailGroceryFb.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OndcProtocolApiForRetailGroceryFb.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.29
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Ack model constructor.
     * @property {module:model/Ack}
     */
    Ack,

    /**
     * The AddOn model constructor.
     * @property {module:model/AddOn}
     */
    AddOn,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The Agent model constructor.
     * @property {module:model/Agent}
     */
    Agent,

    /**
     * The AllOfProviderLocationsItems model constructor.
     * @property {module:model/AllOfProviderLocationsItems}
     */
    AllOfProviderLocationsItems,

    /**
     * The Authorization model constructor.
     * @property {module:model/Authorization}
     */
    Authorization,

    /**
     * The Billing model constructor.
     * @property {module:model/Billing}
     */
    Billing,

    /**
     * The CancelBody model constructor.
     * @property {module:model/CancelBody}
     */
    CancelBody,

    /**
     * The CancelMessage model constructor.
     * @property {module:model/CancelMessage}
     */
    CancelMessage,

    /**
     * The Cancellation model constructor.
     * @property {module:model/Cancellation}
     */
    Cancellation,

    /**
     * The CancellationReasonsBody model constructor.
     * @property {module:model/CancellationReasonsBody}
     */
    CancellationReasonsBody,

    /**
     * The CancellationReasonsMessage model constructor.
     * @property {module:model/CancellationReasonsMessage}
     */
    CancellationReasonsMessage,

    /**
     * The CancellationSelectedReason model constructor.
     * @property {module:model/CancellationSelectedReason}
     */
    CancellationSelectedReason,

    /**
     * The Catalog model constructor.
     * @property {module:model/Catalog}
     */
    Catalog,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Circle model constructor.
     * @property {module:model/Circle}
     */
    Circle,

    /**
     * The City model constructor.
     * @property {module:model/City}
     */
    City,

    /**
     * The ConfirmBody model constructor.
     * @property {module:model/ConfirmBody}
     */
    ConfirmBody,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The Context model constructor.
     * @property {module:model/Context}
     */
    Context,

    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country,

    /**
     * The DecimalValue model constructor.
     * @property {module:model/DecimalValue}
     */
    DecimalValue,

    /**
     * The Descriptor model constructor.
     * @property {module:model/Descriptor}
     */
    Descriptor,

    /**
     * The Dimensions model constructor.
     * @property {module:model/Dimensions}
     */
    Dimensions,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain,

    /**
     * The Duration model constructor.
     * @property {module:model/Duration}
     */
    Duration,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Feedback model constructor.
     * @property {module:model/Feedback}
     */
    Feedback,

    /**
     * The FeedbackCategoriesBody model constructor.
     * @property {module:model/FeedbackCategoriesBody}
     */
    FeedbackCategoriesBody,

    /**
     * The FeedbackForm model constructor.
     * @property {module:model/FeedbackForm}
     */
    FeedbackForm,

    /**
     * The FeedbackFormBody model constructor.
     * @property {module:model/FeedbackFormBody}
     */
    FeedbackFormBody,

    /**
     * The FeedbackFormElement model constructor.
     * @property {module:model/FeedbackFormElement}
     */
    FeedbackFormElement,

    /**
     * The FeedbackUrl model constructor.
     * @property {module:model/FeedbackUrl}
     */
    FeedbackUrl,

    /**
     * The FeedbackUrlParams model constructor.
     * @property {module:model/FeedbackUrlParams}
     */
    FeedbackUrlParams,

    /**
     * The Fulfillment model constructor.
     * @property {module:model/Fulfillment}
     */
    Fulfillment,

    /**
     * The FulfillmentCustomer model constructor.
     * @property {module:model/FulfillmentCustomer}
     */
    FulfillmentCustomer,

    /**
     * The FulfillmentEnd model constructor.
     * @property {module:model/FulfillmentEnd}
     */
    FulfillmentEnd,

    /**
     * The FulfillmentStart model constructor.
     * @property {module:model/FulfillmentStart}
     */
    FulfillmentStart,

    /**
     * The GetCancellationReasonsBody model constructor.
     * @property {module:model/GetCancellationReasonsBody}
     */
    GetCancellationReasonsBody,

    /**
     * The GetFeedbackCategoriesBody model constructor.
     * @property {module:model/GetFeedbackCategoriesBody}
     */
    GetFeedbackCategoriesBody,

    /**
     * The GetFeedbackFormBody model constructor.
     * @property {module:model/GetFeedbackFormBody}
     */
    GetFeedbackFormBody,

    /**
     * The GetFeedbackFormMessage model constructor.
     * @property {module:model/GetFeedbackFormMessage}
     */
    GetFeedbackFormMessage,

    /**
     * The GetRatingCategoriesBody model constructor.
     * @property {module:model/GetRatingCategoriesBody}
     */
    GetRatingCategoriesBody,

    /**
     * The GetReturnReasonsBody model constructor.
     * @property {module:model/GetReturnReasonsBody}
     */
    GetReturnReasonsBody,

    /**
     * The Gps model constructor.
     * @property {module:model/Gps}
     */
    Gps,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The InitBody model constructor.
     * @property {module:model/InitBody}
     */
    InitBody,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse200Message model constructor.
     * @property {module:model/InlineResponse200Message}
     */
    InlineResponse200Message,

    /**
     * The Intent model constructor.
     * @property {module:model/Intent}
     */
    Intent,

    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item,

    /**
     * The ItemOndcorgstatutoryReqsPackagedCommodities model constructor.
     * @property {module:model/ItemOndcorgstatutoryReqsPackagedCommodities}
     */
    ItemOndcorgstatutoryReqsPackagedCommodities,

    /**
     * The ItemOndcorgstatutoryReqsPrepackagedFood model constructor.
     * @property {module:model/ItemOndcorgstatutoryReqsPrepackagedFood}
     */
    ItemOndcorgstatutoryReqsPrepackagedFood,

    /**
     * The ItemQuantity model constructor.
     * @property {module:model/ItemQuantity}
     */
    ItemQuantity,

    /**
     * The ItemQuantityAllocated model constructor.
     * @property {module:model/ItemQuantityAllocated}
     */
    ItemQuantityAllocated,

    /**
     * The ItemQuantityMaximum model constructor.
     * @property {module:model/ItemQuantityMaximum}
     */
    ItemQuantityMaximum,

    /**
     * The Language model constructor.
     * @property {module:model/Language}
     */
    Language,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name,

    /**
     * The Offer model constructor.
     * @property {module:model/Offer}
     */
    Offer,

    /**
     * The OnCancelBody model constructor.
     * @property {module:model/OnCancelBody}
     */
    OnCancelBody,

    /**
     * The OnConfirmBody model constructor.
     * @property {module:model/OnConfirmBody}
     */
    OnConfirmBody,

    /**
     * The OnInitBody model constructor.
     * @property {module:model/OnInitBody}
     */
    OnInitBody,

    /**
     * The OnRatingBody model constructor.
     * @property {module:model/OnRatingBody}
     */
    OnRatingBody,

    /**
     * The OnSearchBody model constructor.
     * @property {module:model/OnSearchBody}
     */
    OnSearchBody,

    /**
     * The OnSearchMessage model constructor.
     * @property {module:model/OnSearchMessage}
     */
    OnSearchMessage,

    /**
     * The OnSelectBody model constructor.
     * @property {module:model/OnSelectBody}
     */
    OnSelectBody,

    /**
     * The OnStatusBody model constructor.
     * @property {module:model/OnStatusBody}
     */
    OnStatusBody,

    /**
     * The OnSupportBody model constructor.
     * @property {module:model/OnSupportBody}
     */
    OnSupportBody,

    /**
     * The OnSupportMessage model constructor.
     * @property {module:model/OnSupportMessage}
     */
    OnSupportMessage,

    /**
     * The OnTrackBody model constructor.
     * @property {module:model/OnTrackBody}
     */
    OnTrackBody,

    /**
     * The OnTrackMessage model constructor.
     * @property {module:model/OnTrackMessage}
     */
    OnTrackMessage,

    /**
     * The OnUpdateBody model constructor.
     * @property {module:model/OnUpdateBody}
     */
    OnUpdateBody,

    /**
     * The Operator model constructor.
     * @property {module:model/Operator}
     */
    Operator,

    /**
     * The OperatorExperience model constructor.
     * @property {module:model/OperatorExperience}
     */
    OperatorExperience,

    /**
     * The Option model constructor.
     * @property {module:model/Option}
     */
    Option,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderAddOns model constructor.
     * @property {module:model/OrderAddOns}
     */
    OrderAddOns,

    /**
     * The OrderItems model constructor.
     * @property {module:model/OrderItems}
     */
    OrderItems,

    /**
     * The OrderOffers model constructor.
     * @property {module:model/OrderOffers}
     */
    OrderOffers,

    /**
     * The OrderOndcorglinkedOrders model constructor.
     * @property {module:model/OrderOndcorglinkedOrders}
     */
    OrderOndcorglinkedOrders,

    /**
     * The OrderProvider model constructor.
     * @property {module:model/OrderProvider}
     */
    OrderProvider,

    /**
     * The OrderProviderLocations model constructor.
     * @property {module:model/OrderProviderLocations}
     */
    OrderProviderLocations,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

    /**
     * The Page model constructor.
     * @property {module:model/Page}
     */
    Page,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The PaymentOndcorgsettlementDetails model constructor.
     * @property {module:model/PaymentOndcorgsettlementDetails}
     */
    PaymentOndcorgsettlementDetails,

    /**
     * The PaymentParams model constructor.
     * @property {module:model/PaymentParams}
     */
    PaymentParams,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy,

    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price,

    /**
     * The Provider model constructor.
     * @property {module:model/Provider}
     */
    Provider,

    /**
     * The Quotation model constructor.
     * @property {module:model/Quotation}
     */
    Quotation,

    /**
     * The QuotationBreakup model constructor.
     * @property {module:model/QuotationBreakup}
     */
    QuotationBreakup,

    /**
     * The Rateable model constructor.
     * @property {module:model/Rateable}
     */
    Rateable,

    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating,

    /**
     * The RatingAck model constructor.
     * @property {module:model/RatingAck}
     */
    RatingAck,

    /**
     * The RatingBody model constructor.
     * @property {module:model/RatingBody}
     */
    RatingBody,

    /**
     * The RatingCategoriesBody model constructor.
     * @property {module:model/RatingCategoriesBody}
     */
    RatingCategoriesBody,

    /**
     * The ReturnReasonsBody model constructor.
     * @property {module:model/ReturnReasonsBody}
     */
    ReturnReasonsBody,

    /**
     * The Scalar model constructor.
     * @property {module:model/Scalar}
     */
    Scalar,

    /**
     * The ScalarRange model constructor.
     * @property {module:model/ScalarRange}
     */
    ScalarRange,

    /**
     * The Schedule model constructor.
     * @property {module:model/Schedule}
     */
    Schedule,

    /**
     * The SearchBody model constructor.
     * @property {module:model/SearchBody}
     */
    SearchBody,

    /**
     * The SearchMessage model constructor.
     * @property {module:model/SearchMessage}
     */
    SearchMessage,

    /**
     * The SelectBody model constructor.
     * @property {module:model/SelectBody}
     */
    SelectBody,

    /**
     * The SelectMessage model constructor.
     * @property {module:model/SelectMessage}
     */
    SelectMessage,

    /**
     * The State model constructor.
     * @property {module:model/State}
     */
    State,

    /**
     * The StatusBody model constructor.
     * @property {module:model/StatusBody}
     */
    StatusBody,

    /**
     * The StatusMessage model constructor.
     * @property {module:model/StatusMessage}
     */
    StatusMessage,

    /**
     * The Subscriber model constructor.
     * @property {module:model/Subscriber}
     */
    Subscriber,

    /**
     * The Support model constructor.
     * @property {module:model/Support}
     */
    Support,

    /**
     * The SupportBody model constructor.
     * @property {module:model/SupportBody}
     */
    SupportBody,

    /**
     * The SupportMessage model constructor.
     * @property {module:model/SupportMessage}
     */
    SupportMessage,

    /**
     * The Tags model constructor.
     * @property {module:model/Tags}
     */
    Tags,

    /**
     * The Time model constructor.
     * @property {module:model/Time}
     */
    Time,

    /**
     * The TimeRange model constructor.
     * @property {module:model/TimeRange}
     */
    TimeRange,

    /**
     * The TrackBody model constructor.
     * @property {module:model/TrackBody}
     */
    TrackBody,

    /**
     * The TrackMessage model constructor.
     * @property {module:model/TrackMessage}
     */
    TrackMessage,

    /**
     * The Tracking model constructor.
     * @property {module:model/Tracking}
     */
    Tracking,

    /**
     * The TrackingData model constructor.
     * @property {module:model/TrackingData}
     */
    TrackingData,

    /**
     * The UpdateBody model constructor.
     * @property {module:model/UpdateBody}
     */
    UpdateBody,

    /**
     * The UpdateMessage model constructor.
     * @property {module:model/UpdateMessage}
     */
    UpdateMessage,

    /**
     * The Vehicle model constructor.
     * @property {module:model/Vehicle}
     */
    Vehicle,

    /**
    * The BuyerAppMetaAPIsApi service constructor.
    * @property {module:api/BuyerAppMetaAPIsApi}
    */
    BuyerAppMetaAPIsApi,

    /**
    * The ONDCBuyerAppApi service constructor.
    * @property {module:api/ONDCBuyerAppApi}
    */
    ONDCBuyerAppApi,

    /**
    * The ONDCGatewayApi service constructor.
    * @property {module:api/ONDCGatewayApi}
    */
    ONDCGatewayApi,

    /**
    * The ONDCSellerAppApi service constructor.
    * @property {module:api/ONDCSellerAppApi}
    */
    ONDCSellerAppApi,

    /**
    * The SellerAppMetaAPIsApi service constructor.
    * @property {module:api/SellerAppMetaAPIsApi}
    */
    SellerAppMetaAPIsApi,

    /**
    * The SellerMetaAPIsApi service constructor.
    * @property {module:api/SellerMetaAPIsApi}
    */
    SellerMetaAPIsApi
};
