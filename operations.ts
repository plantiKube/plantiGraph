import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 mins 50.52 secs after the 23rd hour of Apr 12th 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};

export type AddCropInput = {
  days_from_transfer_to_first_harvest: Scalars['Int'];
  days_harvestable: Scalars['Int'];
  name: Scalars['String'];
  repeater: Scalars['Boolean'];
  required_module_type: Scalars['String'];
  xid: Scalars['String'];
};

export type AddCropIntentionInput = {
  crop: CropRef;
  harvestPerWeek: Scalars['Int'];
};

export type AddCropIntentionPayload = {
  __typename?: 'AddCropIntentionPayload';
  cropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCropIntentionPayloadCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropIntentionOrder>;
};

export type AddCropIntentionsListInput = {
  cropIntentions: Array<CropIntentionRef>;
};

export type AddCropIntentionsListPayload = {
  __typename?: 'AddCropIntentionsListPayload';
  cropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCropIntentionsListPayloadCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AddCropPayload = {
  __typename?: 'AddCropPayload';
  crop?: Maybe<Array<Maybe<Crop>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCropPayloadCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropOrder>;
};

export type AddDrawerInput = {
  cropAssignment?: InputMaybe<CropRef>;
  gridLocation: LocationRef;
  stock?: InputMaybe<Scalars['Int']>;
};

export type AddDrawerPayload = {
  __typename?: 'AddDrawerPayload';
  drawer?: Maybe<Array<Maybe<Drawer>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddDrawerPayloadDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrawerOrder>;
};

export type AddGerminationTrayInput = {
  sites: Array<SiteRef>;
  sitesAvailable: Scalars['Int'];
};

export type AddGerminationTrayPayload = {
  __typename?: 'AddGerminationTrayPayload';
  germinationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddGerminationTrayPayloadGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GerminationTrayOrder>;
};

export type AddGrowPlateInput = {
  rawNetCupReading?: InputMaybe<Scalars['Int']>;
};

export type AddGrowPlatePayload = {
  __typename?: 'AddGrowPlatePayload';
  growPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddGrowPlatePayloadGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GrowPlateOrder>;
};

export type AddLocationInput = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type AddLocationPayload = {
  __typename?: 'AddLocationPayload';
  location?: Maybe<Array<Maybe<Location>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddLocationPayloadLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<LocationOrder>;
};

export type AddModuleInput = {
  instantiationTemplateUsed: ModuleType;
  nutrientMix?: InputMaybe<NutrientMix>;
  shelves?: InputMaybe<Array<InputMaybe<ShelfRef>>>;
  xid: Scalars['String'];
};

export type AddModuleMapInput = {
  modules?: InputMaybe<Array<InputMaybe<ModuleRef>>>;
  xid: Scalars['String'];
};

export type AddModuleMapPayload = {
  __typename?: 'AddModuleMapPayload';
  moduleMap?: Maybe<Array<Maybe<ModuleMap>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddModuleMapPayloadModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleMapOrder>;
};

export type AddModulePayload = {
  __typename?: 'AddModulePayload';
  module?: Maybe<Array<Maybe<Module>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddModulePayloadModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleOrder>;
};

export type AddNurseryInput = {
  GerminationTrays: Array<GerminationTrayRef>;
  xid: Scalars['String'];
};

export type AddNurseryPayload = {
  __typename?: 'AddNurseryPayload';
  numUids?: Maybe<Scalars['Int']>;
  nursery?: Maybe<Array<Maybe<Nursery>>>;
};


export type AddNurseryPayloadNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<NurseryOrder>;
};

export type AddPlantInput = {
  cropName: Scalars['String'];
  germinatedDate?: InputMaybe<Scalars['DateTime']>;
  harvestedDate?: InputMaybe<Scalars['DateTime']>;
  location?: InputMaybe<SiteRef>;
  nutrientType: Scalars['String'];
  repeater: Scalars['Boolean'];
  transferredDate?: InputMaybe<Scalars['DateTime']>;
  xid: Scalars['String'];
};

export type AddPlantPayload = {
  __typename?: 'AddPlantPayload';
  numUids?: Maybe<Scalars['Int']>;
  plant?: Maybe<Array<Maybe<Plant>>>;
};


export type AddPlantPayloadPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PlantOrder>;
};

export type AddSeedInput = {
  qr: Scalars['String'];
};

export type AddSeedPayload = {
  __typename?: 'AddSeedPayload';
  numUids?: Maybe<Scalars['Int']>;
  seed?: Maybe<Array<Maybe<Seed>>>;
};


export type AddSeedPayloadSeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SeedOrder>;
};

export type AddShelfInput = {
  parentModule?: InputMaybe<ModuleRef>;
  sites?: InputMaybe<Array<InputMaybe<SiteRef>>>;
  verticalClearanceHeightToNextShelf: Scalars['Int'];
  xid: Scalars['String'];
};

export type AddShelfPayload = {
  __typename?: 'AddShelfPayload';
  numUids?: Maybe<Scalars['Int']>;
  shelf?: Maybe<Array<Maybe<Shelf>>>;
};


export type AddShelfPayloadShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ShelfOrder>;
};

export type AddSignalInput = {
  algoString?: InputMaybe<Scalars['String']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  growTime?: InputMaybe<Scalars['Int']>;
  maxHarvTime?: InputMaybe<Scalars['Int']>;
  moduleType: Scalars['String'];
  plantId?: InputMaybe<Scalars['String']>;
  plantName: Scalars['String'];
  signalDate: Scalars['DateTime'];
  signalType: SignalType;
  targetMessage?: InputMaybe<Scalars['String']>;
};

export type AddSignalPayload = {
  __typename?: 'AddSignalPayload';
  numUids?: Maybe<Scalars['Int']>;
  signal?: Maybe<Array<Maybe<Signal>>>;
};


export type AddSignalPayloadSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SignalOrder>;
};

export type AddSignalTableInput = {
  signals: Array<SignalRef>;
};

export type AddSignalTablePayload = {
  __typename?: 'AddSignalTablePayload';
  numUids?: Maybe<Scalars['Int']>;
  signalTable?: Maybe<Array<Maybe<SignalTable>>>;
};


export type AddSignalTablePayloadSignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AddSiteInput = {
  occupant?: InputMaybe<PlantRef>;
  xid: Scalars['String'];
};

export type AddSitePayload = {
  __typename?: 'AddSitePayload';
  numUids?: Maybe<Scalars['Int']>;
  site?: Maybe<Array<Maybe<Site>>>;
};


export type AddSitePayloadSiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SiteOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type Crop = {
  __typename?: 'Crop';
  days_from_transfer_to_first_harvest: Scalars['Int'];
  days_harvestable: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  repeater: Scalars['Boolean'];
  required_module_type: Scalars['String'];
  xid: Scalars['String'];
};

export type CropAggregateResult = {
  __typename?: 'CropAggregateResult';
  count?: Maybe<Scalars['Int']>;
  days_from_transfer_to_first_harvestAvg?: Maybe<Scalars['Float']>;
  days_from_transfer_to_first_harvestMax?: Maybe<Scalars['Int']>;
  days_from_transfer_to_first_harvestMin?: Maybe<Scalars['Int']>;
  days_from_transfer_to_first_harvestSum?: Maybe<Scalars['Int']>;
  days_harvestableAvg?: Maybe<Scalars['Float']>;
  days_harvestableMax?: Maybe<Scalars['Int']>;
  days_harvestableMin?: Maybe<Scalars['Int']>;
  days_harvestableSum?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
  required_module_typeMax?: Maybe<Scalars['String']>;
  required_module_typeMin?: Maybe<Scalars['String']>;
  xidMax?: Maybe<Scalars['String']>;
  xidMin?: Maybe<Scalars['String']>;
};

export type CropFilter = {
  and?: InputMaybe<Array<InputMaybe<CropFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CropHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<CropFilter>;
  or?: InputMaybe<Array<InputMaybe<CropFilter>>>;
  xid?: InputMaybe<StringHashFilter>;
};

export enum CropHasFilter {
  DaysFromTransferToFirstHarvest = 'days_from_transfer_to_first_harvest',
  DaysHarvestable = 'days_harvestable',
  Name = 'name',
  Repeater = 'repeater',
  RequiredModuleType = 'required_module_type',
  Xid = 'xid'
}

export type CropIntention = {
  __typename?: 'CropIntention';
  crop: Crop;
  harvestPerWeek: Scalars['Int'];
};


export type CropIntentionCropArgs = {
  filter?: InputMaybe<CropFilter>;
};

export type CropIntentionAggregateResult = {
  __typename?: 'CropIntentionAggregateResult';
  count?: Maybe<Scalars['Int']>;
  harvestPerWeekAvg?: Maybe<Scalars['Float']>;
  harvestPerWeekMax?: Maybe<Scalars['Int']>;
  harvestPerWeekMin?: Maybe<Scalars['Int']>;
  harvestPerWeekSum?: Maybe<Scalars['Int']>;
};

export type CropIntentionFilter = {
  and?: InputMaybe<Array<InputMaybe<CropIntentionFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CropIntentionHasFilter>>>;
  not?: InputMaybe<CropIntentionFilter>;
  or?: InputMaybe<Array<InputMaybe<CropIntentionFilter>>>;
};

export enum CropIntentionHasFilter {
  Crop = 'crop',
  HarvestPerWeek = 'harvestPerWeek'
}

export type CropIntentionOrder = {
  asc?: InputMaybe<CropIntentionOrderable>;
  desc?: InputMaybe<CropIntentionOrderable>;
  then?: InputMaybe<CropIntentionOrder>;
};

export enum CropIntentionOrderable {
  HarvestPerWeek = 'harvestPerWeek'
}

export type CropIntentionPatch = {
  crop?: InputMaybe<CropRef>;
  harvestPerWeek?: InputMaybe<Scalars['Int']>;
};

export type CropIntentionRef = {
  crop?: InputMaybe<CropRef>;
  harvestPerWeek?: InputMaybe<Scalars['Int']>;
};

export type CropIntentionsList = {
  __typename?: 'CropIntentionsList';
  cropIntentions: Array<CropIntention>;
  cropIntentionsAggregate?: Maybe<CropIntentionAggregateResult>;
};


export type CropIntentionsListCropIntentionsArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropIntentionOrder>;
};


export type CropIntentionsListCropIntentionsAggregateArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
};

export type CropIntentionsListAggregateResult = {
  __typename?: 'CropIntentionsListAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type CropIntentionsListFilter = {
  and?: InputMaybe<Array<InputMaybe<CropIntentionsListFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CropIntentionsListHasFilter>>>;
  not?: InputMaybe<CropIntentionsListFilter>;
  or?: InputMaybe<Array<InputMaybe<CropIntentionsListFilter>>>;
};

export enum CropIntentionsListHasFilter {
  CropIntentions = 'cropIntentions'
}

export type CropIntentionsListPatch = {
  cropIntentions?: InputMaybe<Array<CropIntentionRef>>;
};

export type CropIntentionsListRef = {
  cropIntentions?: InputMaybe<Array<CropIntentionRef>>;
};

export type CropOrder = {
  asc?: InputMaybe<CropOrderable>;
  desc?: InputMaybe<CropOrderable>;
  then?: InputMaybe<CropOrder>;
};

export enum CropOrderable {
  DaysFromTransferToFirstHarvest = 'days_from_transfer_to_first_harvest',
  DaysHarvestable = 'days_harvestable',
  Name = 'name',
  RequiredModuleType = 'required_module_type',
  Xid = 'xid'
}

export type CropPatch = {
  days_from_transfer_to_first_harvest?: InputMaybe<Scalars['Int']>;
  days_harvestable?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  repeater?: InputMaybe<Scalars['Boolean']>;
  required_module_type?: InputMaybe<Scalars['String']>;
};

export type CropRef = {
  days_from_transfer_to_first_harvest?: InputMaybe<Scalars['Int']>;
  days_harvestable?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  repeater?: InputMaybe<Scalars['Boolean']>;
  required_module_type?: InputMaybe<Scalars['String']>;
  xid?: InputMaybe<Scalars['String']>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteCropIntentionPayload = {
  __typename?: 'DeleteCropIntentionPayload';
  cropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCropIntentionPayloadCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropIntentionOrder>;
};

export type DeleteCropIntentionsListPayload = {
  __typename?: 'DeleteCropIntentionsListPayload';
  cropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCropIntentionsListPayloadCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type DeleteCropPayload = {
  __typename?: 'DeleteCropPayload';
  crop?: Maybe<Array<Maybe<Crop>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCropPayloadCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropOrder>;
};

export type DeleteDrawerPayload = {
  __typename?: 'DeleteDrawerPayload';
  drawer?: Maybe<Array<Maybe<Drawer>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteDrawerPayloadDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrawerOrder>;
};

export type DeleteGerminationTrayPayload = {
  __typename?: 'DeleteGerminationTrayPayload';
  germinationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteGerminationTrayPayloadGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GerminationTrayOrder>;
};

export type DeleteGrowPlatePayload = {
  __typename?: 'DeleteGrowPlatePayload';
  growPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteGrowPlatePayloadGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GrowPlateOrder>;
};

export type DeleteLocationPayload = {
  __typename?: 'DeleteLocationPayload';
  location?: Maybe<Array<Maybe<Location>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteLocationPayloadLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<LocationOrder>;
};

export type DeleteModuleMapPayload = {
  __typename?: 'DeleteModuleMapPayload';
  moduleMap?: Maybe<Array<Maybe<ModuleMap>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteModuleMapPayloadModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleMapOrder>;
};

export type DeleteModulePayload = {
  __typename?: 'DeleteModulePayload';
  module?: Maybe<Array<Maybe<Module>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteModulePayloadModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleOrder>;
};

export type DeleteNurseryPayload = {
  __typename?: 'DeleteNurseryPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  nursery?: Maybe<Array<Maybe<Nursery>>>;
};


export type DeleteNurseryPayloadNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<NurseryOrder>;
};

export type DeletePlantPayload = {
  __typename?: 'DeletePlantPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  plant?: Maybe<Array<Maybe<Plant>>>;
};


export type DeletePlantPayloadPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PlantOrder>;
};

export type DeleteSeedPayload = {
  __typename?: 'DeleteSeedPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  seed?: Maybe<Array<Maybe<Seed>>>;
};


export type DeleteSeedPayloadSeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SeedOrder>;
};

export type DeleteShelfPayload = {
  __typename?: 'DeleteShelfPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  shelf?: Maybe<Array<Maybe<Shelf>>>;
};


export type DeleteShelfPayloadShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ShelfOrder>;
};

export type DeleteSignalPayload = {
  __typename?: 'DeleteSignalPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  signal?: Maybe<Array<Maybe<Signal>>>;
};


export type DeleteSignalPayloadSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SignalOrder>;
};

export type DeleteSignalTablePayload = {
  __typename?: 'DeleteSignalTablePayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  signalTable?: Maybe<Array<Maybe<SignalTable>>>;
};


export type DeleteSignalTablePayloadSignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type DeleteSitePayload = {
  __typename?: 'DeleteSitePayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  site?: Maybe<Array<Maybe<Site>>>;
};


export type DeleteSitePayloadSiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SiteOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type Drawer = {
  __typename?: 'Drawer';
  cropAssignment?: Maybe<Crop>;
  gridLocation: Location;
  stock?: Maybe<Scalars['Int']>;
};


export type DrawerCropAssignmentArgs = {
  filter?: InputMaybe<CropFilter>;
};


export type DrawerGridLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
};

export type DrawerAggregateResult = {
  __typename?: 'DrawerAggregateResult';
  count?: Maybe<Scalars['Int']>;
  stockAvg?: Maybe<Scalars['Float']>;
  stockMax?: Maybe<Scalars['Int']>;
  stockMin?: Maybe<Scalars['Int']>;
  stockSum?: Maybe<Scalars['Int']>;
};

export type DrawerFilter = {
  and?: InputMaybe<Array<InputMaybe<DrawerFilter>>>;
  has?: InputMaybe<Array<InputMaybe<DrawerHasFilter>>>;
  not?: InputMaybe<DrawerFilter>;
  or?: InputMaybe<Array<InputMaybe<DrawerFilter>>>;
};

export enum DrawerHasFilter {
  CropAssignment = 'cropAssignment',
  GridLocation = 'gridLocation',
  Stock = 'stock'
}

export type DrawerOrder = {
  asc?: InputMaybe<DrawerOrderable>;
  desc?: InputMaybe<DrawerOrderable>;
  then?: InputMaybe<DrawerOrder>;
};

export enum DrawerOrderable {
  Stock = 'stock'
}

export type DrawerPatch = {
  cropAssignment?: InputMaybe<CropRef>;
  gridLocation?: InputMaybe<LocationRef>;
  stock?: InputMaybe<Scalars['Int']>;
};

export type DrawerRef = {
  cropAssignment?: InputMaybe<CropRef>;
  gridLocation?: InputMaybe<LocationRef>;
  stock?: InputMaybe<Scalars['Int']>;
};

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export type GerminationTray = {
  __typename?: 'GerminationTray';
  id: Scalars['ID'];
  sites: Array<Site>;
  sitesAggregate?: Maybe<SiteAggregateResult>;
  sitesAvailable: Scalars['Int'];
};


export type GerminationTraySitesArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SiteOrder>;
};


export type GerminationTraySitesAggregateArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type GerminationTrayAggregateResult = {
  __typename?: 'GerminationTrayAggregateResult';
  count?: Maybe<Scalars['Int']>;
  sitesAvailableAvg?: Maybe<Scalars['Float']>;
  sitesAvailableMax?: Maybe<Scalars['Int']>;
  sitesAvailableMin?: Maybe<Scalars['Int']>;
  sitesAvailableSum?: Maybe<Scalars['Int']>;
};

export type GerminationTrayFilter = {
  and?: InputMaybe<Array<InputMaybe<GerminationTrayFilter>>>;
  has?: InputMaybe<Array<InputMaybe<GerminationTrayHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<GerminationTrayFilter>;
  or?: InputMaybe<Array<InputMaybe<GerminationTrayFilter>>>;
};

export enum GerminationTrayHasFilter {
  Sites = 'sites',
  SitesAvailable = 'sitesAvailable'
}

export type GerminationTrayOrder = {
  asc?: InputMaybe<GerminationTrayOrderable>;
  desc?: InputMaybe<GerminationTrayOrderable>;
  then?: InputMaybe<GerminationTrayOrder>;
};

export enum GerminationTrayOrderable {
  SitesAvailable = 'sitesAvailable'
}

export type GerminationTrayPatch = {
  sites?: InputMaybe<Array<SiteRef>>;
  sitesAvailable?: InputMaybe<Scalars['Int']>;
};

export type GerminationTrayRef = {
  id?: InputMaybe<Scalars['ID']>;
  sites?: InputMaybe<Array<SiteRef>>;
  sitesAvailable?: InputMaybe<Scalars['Int']>;
};

export type GrowPlate = {
  __typename?: 'GrowPlate';
  rawNetCupReading?: Maybe<Scalars['Int']>;
};

export type GrowPlateAggregateResult = {
  __typename?: 'GrowPlateAggregateResult';
  count?: Maybe<Scalars['Int']>;
  rawNetCupReadingAvg?: Maybe<Scalars['Float']>;
  rawNetCupReadingMax?: Maybe<Scalars['Int']>;
  rawNetCupReadingMin?: Maybe<Scalars['Int']>;
  rawNetCupReadingSum?: Maybe<Scalars['Int']>;
};

export type GrowPlateFilter = {
  and?: InputMaybe<Array<InputMaybe<GrowPlateFilter>>>;
  has?: InputMaybe<Array<InputMaybe<GrowPlateHasFilter>>>;
  not?: InputMaybe<GrowPlateFilter>;
  or?: InputMaybe<Array<InputMaybe<GrowPlateFilter>>>;
};

export enum GrowPlateHasFilter {
  RawNetCupReading = 'rawNetCupReading'
}

export type GrowPlateOrder = {
  asc?: InputMaybe<GrowPlateOrderable>;
  desc?: InputMaybe<GrowPlateOrderable>;
  then?: InputMaybe<GrowPlateOrder>;
};

export enum GrowPlateOrderable {
  RawNetCupReading = 'rawNetCupReading'
}

export type GrowPlatePatch = {
  rawNetCupReading?: InputMaybe<Scalars['Int']>;
};

export type GrowPlateRef = {
  rawNetCupReading?: InputMaybe<Scalars['Int']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type Location = {
  __typename?: 'Location';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type LocationAggregateResult = {
  __typename?: 'LocationAggregateResult';
  count?: Maybe<Scalars['Int']>;
  xAvg?: Maybe<Scalars['Float']>;
  xMax?: Maybe<Scalars['Int']>;
  xMin?: Maybe<Scalars['Int']>;
  xSum?: Maybe<Scalars['Int']>;
  yAvg?: Maybe<Scalars['Float']>;
  yMax?: Maybe<Scalars['Int']>;
  yMin?: Maybe<Scalars['Int']>;
  ySum?: Maybe<Scalars['Int']>;
};

export type LocationFilter = {
  and?: InputMaybe<Array<InputMaybe<LocationFilter>>>;
  has?: InputMaybe<Array<InputMaybe<LocationHasFilter>>>;
  not?: InputMaybe<LocationFilter>;
  or?: InputMaybe<Array<InputMaybe<LocationFilter>>>;
};

export enum LocationHasFilter {
  X = 'x',
  Y = 'y'
}

export type LocationOrder = {
  asc?: InputMaybe<LocationOrderable>;
  desc?: InputMaybe<LocationOrderable>;
  then?: InputMaybe<LocationOrder>;
};

export enum LocationOrderable {
  X = 'x',
  Y = 'y'
}

export type LocationPatch = {
  x?: InputMaybe<Scalars['Int']>;
  y?: InputMaybe<Scalars['Int']>;
};

export type LocationRef = {
  x?: InputMaybe<Scalars['Int']>;
  y?: InputMaybe<Scalars['Int']>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type Module = {
  __typename?: 'Module';
  id: Scalars['ID'];
  instantiationTemplateUsed: ModuleType;
  nutrientMix?: Maybe<NutrientMix>;
  shelves?: Maybe<Array<Maybe<Shelf>>>;
  shelvesAggregate?: Maybe<ShelfAggregateResult>;
  totalNumberOfSites: Scalars['Int'];
  xid: Scalars['String'];
};


export type ModuleShelvesArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ShelfOrder>;
};


export type ModuleShelvesAggregateArgs = {
  filter?: InputMaybe<ShelfFilter>;
};

export type ModuleAggregateResult = {
  __typename?: 'ModuleAggregateResult';
  count?: Maybe<Scalars['Int']>;
  xidMax?: Maybe<Scalars['String']>;
  xidMin?: Maybe<Scalars['String']>;
};

export type ModuleFilter = {
  and?: InputMaybe<Array<InputMaybe<ModuleFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ModuleHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<ModuleFilter>;
  or?: InputMaybe<Array<InputMaybe<ModuleFilter>>>;
  xid?: InputMaybe<StringHashFilter>;
};

export enum ModuleHasFilter {
  InstantiationTemplateUsed = 'instantiationTemplateUsed',
  NutrientMix = 'nutrientMix',
  Shelves = 'shelves',
  Xid = 'xid'
}

export type ModuleMap = {
  __typename?: 'ModuleMap';
  id: Scalars['ID'];
  modules?: Maybe<Array<Maybe<Module>>>;
  modulesAggregate?: Maybe<ModuleAggregateResult>;
  xid: Scalars['String'];
};


export type ModuleMapModulesArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleOrder>;
};


export type ModuleMapModulesAggregateArgs = {
  filter?: InputMaybe<ModuleFilter>;
};

export type ModuleMapAggregateResult = {
  __typename?: 'ModuleMapAggregateResult';
  count?: Maybe<Scalars['Int']>;
  xidMax?: Maybe<Scalars['String']>;
  xidMin?: Maybe<Scalars['String']>;
};

export type ModuleMapFilter = {
  and?: InputMaybe<Array<InputMaybe<ModuleMapFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ModuleMapHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<ModuleMapFilter>;
  or?: InputMaybe<Array<InputMaybe<ModuleMapFilter>>>;
  xid?: InputMaybe<StringHashFilter>;
};

export enum ModuleMapHasFilter {
  Modules = 'modules',
  Xid = 'xid'
}

export type ModuleMapOrder = {
  asc?: InputMaybe<ModuleMapOrderable>;
  desc?: InputMaybe<ModuleMapOrderable>;
  then?: InputMaybe<ModuleMapOrder>;
};

export enum ModuleMapOrderable {
  Xid = 'xid'
}

export type ModuleMapPatch = {
  modules?: InputMaybe<Array<InputMaybe<ModuleRef>>>;
};

export type ModuleMapRef = {
  id?: InputMaybe<Scalars['ID']>;
  modules?: InputMaybe<Array<InputMaybe<ModuleRef>>>;
  xid?: InputMaybe<Scalars['String']>;
};

export type ModuleOrder = {
  asc?: InputMaybe<ModuleOrderable>;
  desc?: InputMaybe<ModuleOrderable>;
  then?: InputMaybe<ModuleOrder>;
};

export enum ModuleOrderable {
  Xid = 'xid'
}

export type ModulePatch = {
  instantiationTemplateUsed?: InputMaybe<ModuleType>;
  nutrientMix?: InputMaybe<NutrientMix>;
  shelves?: InputMaybe<Array<InputMaybe<ShelfRef>>>;
};

export type ModuleRef = {
  id?: InputMaybe<Scalars['ID']>;
  instantiationTemplateUsed?: InputMaybe<ModuleType>;
  nutrientMix?: InputMaybe<NutrientMix>;
  shelves?: InputMaybe<Array<InputMaybe<ShelfRef>>>;
  xid?: InputMaybe<Scalars['String']>;
};

export enum ModuleType {
  Dwc_12inNutrientMixA = 'DWC_12in_NutrientMixA',
  Dwc_12inNutrientMixB = 'DWC_12in_NutrientMixB',
  Dwc_24inNutrientMixA = 'DWC_24in_NutrientMixA',
  Dwc_24inNutrientMixB = 'DWC_24in_NutrientMixB',
  Dwc_36inNutrientMixA = 'DWC_36in_NutrientMixA',
  Dwc_36inNutrientMixB = 'DWC_36in_NutrientMixB',
  Vining = 'VINING'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCrop?: Maybe<AddCropPayload>;
  addCropIntention?: Maybe<AddCropIntentionPayload>;
  addCropIntentionsList?: Maybe<AddCropIntentionsListPayload>;
  addDrawer?: Maybe<AddDrawerPayload>;
  addGerminationTray?: Maybe<AddGerminationTrayPayload>;
  addGrowPlate?: Maybe<AddGrowPlatePayload>;
  addLocation?: Maybe<AddLocationPayload>;
  addModule?: Maybe<AddModulePayload>;
  addModuleMap?: Maybe<AddModuleMapPayload>;
  addNursery?: Maybe<AddNurseryPayload>;
  addPlant?: Maybe<AddPlantPayload>;
  addSeed?: Maybe<AddSeedPayload>;
  addShelf?: Maybe<AddShelfPayload>;
  addSignal?: Maybe<AddSignalPayload>;
  addSignalTable?: Maybe<AddSignalTablePayload>;
  addSite?: Maybe<AddSitePayload>;
  deleteCrop?: Maybe<DeleteCropPayload>;
  deleteCropIntention?: Maybe<DeleteCropIntentionPayload>;
  deleteCropIntentionsList?: Maybe<DeleteCropIntentionsListPayload>;
  deleteDrawer?: Maybe<DeleteDrawerPayload>;
  deleteGerminationTray?: Maybe<DeleteGerminationTrayPayload>;
  deleteGrowPlate?: Maybe<DeleteGrowPlatePayload>;
  deleteLocation?: Maybe<DeleteLocationPayload>;
  deleteModule?: Maybe<DeleteModulePayload>;
  deleteModuleMap?: Maybe<DeleteModuleMapPayload>;
  deleteNursery?: Maybe<DeleteNurseryPayload>;
  deletePlant?: Maybe<DeletePlantPayload>;
  deleteSeed?: Maybe<DeleteSeedPayload>;
  deleteShelf?: Maybe<DeleteShelfPayload>;
  deleteSignal?: Maybe<DeleteSignalPayload>;
  deleteSignalTable?: Maybe<DeleteSignalTablePayload>;
  deleteSite?: Maybe<DeleteSitePayload>;
  ingestQR: Scalars['String'];
  updateCrop?: Maybe<UpdateCropPayload>;
  updateCropIntention?: Maybe<UpdateCropIntentionPayload>;
  updateCropIntentionsList?: Maybe<UpdateCropIntentionsListPayload>;
  updateDrawer?: Maybe<UpdateDrawerPayload>;
  updateGerminationTray?: Maybe<UpdateGerminationTrayPayload>;
  updateGrowPlate?: Maybe<UpdateGrowPlatePayload>;
  updateLocation?: Maybe<UpdateLocationPayload>;
  updateModule?: Maybe<UpdateModulePayload>;
  updateModuleMap?: Maybe<UpdateModuleMapPayload>;
  updateNursery?: Maybe<UpdateNurseryPayload>;
  updatePlant?: Maybe<UpdatePlantPayload>;
  updateSeed?: Maybe<UpdateSeedPayload>;
  updateShelf?: Maybe<UpdateShelfPayload>;
  updateSignal?: Maybe<UpdateSignalPayload>;
  updateSignalTable?: Maybe<UpdateSignalTablePayload>;
  updateSite?: Maybe<UpdateSitePayload>;
};


export type MutationAddCropArgs = {
  input: Array<AddCropInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddCropIntentionArgs = {
  input: Array<AddCropIntentionInput>;
};


export type MutationAddCropIntentionsListArgs = {
  input: Array<AddCropIntentionsListInput>;
};


export type MutationAddDrawerArgs = {
  input: Array<AddDrawerInput>;
};


export type MutationAddGerminationTrayArgs = {
  input: Array<AddGerminationTrayInput>;
};


export type MutationAddGrowPlateArgs = {
  input: Array<AddGrowPlateInput>;
};


export type MutationAddLocationArgs = {
  input: Array<AddLocationInput>;
};


export type MutationAddModuleArgs = {
  input: Array<AddModuleInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddModuleMapArgs = {
  input: Array<AddModuleMapInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddNurseryArgs = {
  input: Array<AddNurseryInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddPlantArgs = {
  input: Array<AddPlantInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddSeedArgs = {
  input: Array<AddSeedInput>;
};


export type MutationAddShelfArgs = {
  input: Array<AddShelfInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddSignalArgs = {
  input: Array<AddSignalInput>;
};


export type MutationAddSignalTableArgs = {
  input: Array<AddSignalTableInput>;
};


export type MutationAddSiteArgs = {
  input: Array<AddSiteInput>;
  upsert?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteCropArgs = {
  filter: CropFilter;
};


export type MutationDeleteCropIntentionArgs = {
  filter: CropIntentionFilter;
};


export type MutationDeleteCropIntentionsListArgs = {
  filter: CropIntentionsListFilter;
};


export type MutationDeleteDrawerArgs = {
  filter: DrawerFilter;
};


export type MutationDeleteGerminationTrayArgs = {
  filter: GerminationTrayFilter;
};


export type MutationDeleteGrowPlateArgs = {
  filter: GrowPlateFilter;
};


export type MutationDeleteLocationArgs = {
  filter: LocationFilter;
};


export type MutationDeleteModuleArgs = {
  filter: ModuleFilter;
};


export type MutationDeleteModuleMapArgs = {
  filter: ModuleMapFilter;
};


export type MutationDeleteNurseryArgs = {
  filter: NurseryFilter;
};


export type MutationDeletePlantArgs = {
  filter: PlantFilter;
};


export type MutationDeleteSeedArgs = {
  filter: SeedFilter;
};


export type MutationDeleteShelfArgs = {
  filter: ShelfFilter;
};


export type MutationDeleteSignalArgs = {
  filter: SignalFilter;
};


export type MutationDeleteSignalTableArgs = {
  filter: SignalTableFilter;
};


export type MutationDeleteSiteArgs = {
  filter: SiteFilter;
};


export type MutationIngestQrArgs = {
  qr: Scalars['String'];
};


export type MutationUpdateCropArgs = {
  input: UpdateCropInput;
};


export type MutationUpdateCropIntentionArgs = {
  input: UpdateCropIntentionInput;
};


export type MutationUpdateCropIntentionsListArgs = {
  input: UpdateCropIntentionsListInput;
};


export type MutationUpdateDrawerArgs = {
  input: UpdateDrawerInput;
};


export type MutationUpdateGerminationTrayArgs = {
  input: UpdateGerminationTrayInput;
};


export type MutationUpdateGrowPlateArgs = {
  input: UpdateGrowPlateInput;
};


export type MutationUpdateLocationArgs = {
  input: UpdateLocationInput;
};


export type MutationUpdateModuleArgs = {
  input: UpdateModuleInput;
};


export type MutationUpdateModuleMapArgs = {
  input: UpdateModuleMapInput;
};


export type MutationUpdateNurseryArgs = {
  input: UpdateNurseryInput;
};


export type MutationUpdatePlantArgs = {
  input: UpdatePlantInput;
};


export type MutationUpdateSeedArgs = {
  input: UpdateSeedInput;
};


export type MutationUpdateShelfArgs = {
  input: UpdateShelfInput;
};


export type MutationUpdateSignalArgs = {
  input: UpdateSignalInput;
};


export type MutationUpdateSignalTableArgs = {
  input: UpdateSignalTableInput;
};


export type MutationUpdateSiteArgs = {
  input: UpdateSiteInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Nursery = {
  __typename?: 'Nursery';
  GerminationTrays: Array<GerminationTray>;
  GerminationTraysAggregate?: Maybe<GerminationTrayAggregateResult>;
  id: Scalars['ID'];
  xid: Scalars['String'];
};


export type NurseryGerminationTraysArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GerminationTrayOrder>;
};


export type NurseryGerminationTraysAggregateArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
};

export type NurseryAggregateResult = {
  __typename?: 'NurseryAggregateResult';
  count?: Maybe<Scalars['Int']>;
  xidMax?: Maybe<Scalars['String']>;
  xidMin?: Maybe<Scalars['String']>;
};

export type NurseryFilter = {
  and?: InputMaybe<Array<InputMaybe<NurseryFilter>>>;
  has?: InputMaybe<Array<InputMaybe<NurseryHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<NurseryFilter>;
  or?: InputMaybe<Array<InputMaybe<NurseryFilter>>>;
  xid?: InputMaybe<StringHashFilter>;
};

export enum NurseryHasFilter {
  GerminationTrays = 'GerminationTrays',
  Xid = 'xid'
}

export type NurseryOrder = {
  asc?: InputMaybe<NurseryOrderable>;
  desc?: InputMaybe<NurseryOrderable>;
  then?: InputMaybe<NurseryOrder>;
};

export enum NurseryOrderable {
  Xid = 'xid'
}

export type NurseryPatch = {
  GerminationTrays?: InputMaybe<Array<GerminationTrayRef>>;
};

export type NurseryRef = {
  GerminationTrays?: InputMaybe<Array<GerminationTrayRef>>;
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};

export enum NutrientMix {
  A = 'A',
  B = 'B'
}

export type Plant = {
  __typename?: 'Plant';
  cropName: Scalars['String'];
  germinatedDate?: Maybe<Scalars['DateTime']>;
  harvestedDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  location?: Maybe<Site>;
  nutrientType: Scalars['String'];
  repeater: Scalars['Boolean'];
  transferredDate?: Maybe<Scalars['DateTime']>;
  xid: Scalars['String'];
};


export type PlantLocationArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type PlantAggregateResult = {
  __typename?: 'PlantAggregateResult';
  count?: Maybe<Scalars['Int']>;
  cropNameMax?: Maybe<Scalars['String']>;
  cropNameMin?: Maybe<Scalars['String']>;
  germinatedDateMax?: Maybe<Scalars['DateTime']>;
  germinatedDateMin?: Maybe<Scalars['DateTime']>;
  harvestedDateMax?: Maybe<Scalars['DateTime']>;
  harvestedDateMin?: Maybe<Scalars['DateTime']>;
  nutrientTypeMax?: Maybe<Scalars['String']>;
  nutrientTypeMin?: Maybe<Scalars['String']>;
  transferredDateMax?: Maybe<Scalars['DateTime']>;
  transferredDateMin?: Maybe<Scalars['DateTime']>;
  xidMax?: Maybe<Scalars['String']>;
  xidMin?: Maybe<Scalars['String']>;
};

export type PlantFilter = {
  and?: InputMaybe<Array<InputMaybe<PlantFilter>>>;
  cropName?: InputMaybe<StringTermFilter>;
  has?: InputMaybe<Array<InputMaybe<PlantHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<PlantFilter>;
  nutrientType?: InputMaybe<StringTermFilter>;
  or?: InputMaybe<Array<InputMaybe<PlantFilter>>>;
  repeater?: InputMaybe<Scalars['Boolean']>;
  xid?: InputMaybe<StringHashFilter>;
};

export enum PlantHasFilter {
  CropName = 'cropName',
  GerminatedDate = 'germinatedDate',
  HarvestedDate = 'harvestedDate',
  Location = 'location',
  NutrientType = 'nutrientType',
  Repeater = 'repeater',
  TransferredDate = 'transferredDate',
  Xid = 'xid'
}

export type PlantOrder = {
  asc?: InputMaybe<PlantOrderable>;
  desc?: InputMaybe<PlantOrderable>;
  then?: InputMaybe<PlantOrder>;
};

export enum PlantOrderable {
  CropName = 'cropName',
  GerminatedDate = 'germinatedDate',
  HarvestedDate = 'harvestedDate',
  NutrientType = 'nutrientType',
  TransferredDate = 'transferredDate',
  Xid = 'xid'
}

export type PlantPatch = {
  cropName?: InputMaybe<Scalars['String']>;
  germinatedDate?: InputMaybe<Scalars['DateTime']>;
  harvestedDate?: InputMaybe<Scalars['DateTime']>;
  location?: InputMaybe<SiteRef>;
  nutrientType?: InputMaybe<Scalars['String']>;
  repeater?: InputMaybe<Scalars['Boolean']>;
  transferredDate?: InputMaybe<Scalars['DateTime']>;
};

export type PlantRef = {
  cropName?: InputMaybe<Scalars['String']>;
  germinatedDate?: InputMaybe<Scalars['DateTime']>;
  harvestedDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<SiteRef>;
  nutrientType?: InputMaybe<Scalars['String']>;
  repeater?: InputMaybe<Scalars['Boolean']>;
  transferredDate?: InputMaybe<Scalars['DateTime']>;
  xid?: InputMaybe<Scalars['String']>;
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  addTwo: Scalars['Int'];
  aggregateCrop?: Maybe<CropAggregateResult>;
  aggregateCropIntention?: Maybe<CropIntentionAggregateResult>;
  aggregateCropIntentionsList?: Maybe<CropIntentionsListAggregateResult>;
  aggregateDrawer?: Maybe<DrawerAggregateResult>;
  aggregateGerminationTray?: Maybe<GerminationTrayAggregateResult>;
  aggregateGrowPlate?: Maybe<GrowPlateAggregateResult>;
  aggregateLocation?: Maybe<LocationAggregateResult>;
  aggregateModule?: Maybe<ModuleAggregateResult>;
  aggregateModuleMap?: Maybe<ModuleMapAggregateResult>;
  aggregateNursery?: Maybe<NurseryAggregateResult>;
  aggregatePlant?: Maybe<PlantAggregateResult>;
  aggregateSeed?: Maybe<SeedAggregateResult>;
  aggregateShelf?: Maybe<ShelfAggregateResult>;
  aggregateSignal?: Maybe<SignalAggregateResult>;
  aggregateSignalTable?: Maybe<SignalTableAggregateResult>;
  aggregateSite?: Maybe<SiteAggregateResult>;
  exampleLambda: Scalars['String'];
  getCrop?: Maybe<Crop>;
  getGerminationTray?: Maybe<GerminationTray>;
  getModule?: Maybe<Module>;
  getModuleMap?: Maybe<ModuleMap>;
  getNursery?: Maybe<Nursery>;
  getPlant?: Maybe<Plant>;
  getShelf?: Maybe<Shelf>;
  getSite?: Maybe<Site>;
  queryCrop?: Maybe<Array<Maybe<Crop>>>;
  queryCropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  queryCropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  queryDrawer?: Maybe<Array<Maybe<Drawer>>>;
  queryGerminationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  queryGrowPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  queryLocation?: Maybe<Array<Maybe<Location>>>;
  queryModule?: Maybe<Array<Maybe<Module>>>;
  queryModuleMap?: Maybe<Array<Maybe<ModuleMap>>>;
  queryNursery?: Maybe<Array<Maybe<Nursery>>>;
  queryPlant?: Maybe<Array<Maybe<Plant>>>;
  querySeed?: Maybe<Array<Maybe<Seed>>>;
  queryShelf?: Maybe<Array<Maybe<Shelf>>>;
  querySignal?: Maybe<Array<Maybe<Signal>>>;
  querySignalTable?: Maybe<Array<Maybe<SignalTable>>>;
  querySite?: Maybe<Array<Maybe<Site>>>;
};


export type QueryAddTwoArgs = {
  one: Scalars['Int'];
  two: Scalars['Int'];
};


export type QueryAggregateCropArgs = {
  filter?: InputMaybe<CropFilter>;
};


export type QueryAggregateCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
};


export type QueryAggregateCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
};


export type QueryAggregateDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
};


export type QueryAggregateGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
};


export type QueryAggregateGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
};


export type QueryAggregateLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
};


export type QueryAggregateModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
};


export type QueryAggregateModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
};


export type QueryAggregateNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
};


export type QueryAggregatePlantArgs = {
  filter?: InputMaybe<PlantFilter>;
};


export type QueryAggregateSeedArgs = {
  filter?: InputMaybe<SeedFilter>;
};


export type QueryAggregateShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
};


export type QueryAggregateSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
};


export type QueryAggregateSignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
};


export type QueryAggregateSiteArgs = {
  filter?: InputMaybe<SiteFilter>;
};


export type QueryExampleLambdaArgs = {
  exampleStringInput: Scalars['String'];
};


export type QueryGetCropArgs = {
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};


export type QueryGetGerminationTrayArgs = {
  id: Scalars['ID'];
};


export type QueryGetModuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};


export type QueryGetModuleMapArgs = {
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};


export type QueryGetNurseryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};


export type QueryGetPlantArgs = {
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};


export type QueryGetShelfArgs = {
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};


export type QueryGetSiteArgs = {
  id?: InputMaybe<Scalars['ID']>;
  xid?: InputMaybe<Scalars['String']>;
};


export type QueryQueryCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropOrder>;
};


export type QueryQueryCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropIntentionOrder>;
};


export type QueryQueryCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQueryDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrawerOrder>;
};


export type QueryQueryGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GerminationTrayOrder>;
};


export type QueryQueryGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GrowPlateOrder>;
};


export type QueryQueryLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<LocationOrder>;
};


export type QueryQueryModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleOrder>;
};


export type QueryQueryModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleMapOrder>;
};


export type QueryQueryNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<NurseryOrder>;
};


export type QueryQueryPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PlantOrder>;
};


export type QueryQuerySeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SeedOrder>;
};


export type QueryQueryShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ShelfOrder>;
};


export type QueryQuerySignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SignalOrder>;
};


export type QueryQuerySignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQuerySiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SiteOrder>;
};

export type Seed = {
  __typename?: 'Seed';
  qr: Scalars['String'];
};

export type SeedAggregateResult = {
  __typename?: 'SeedAggregateResult';
  count?: Maybe<Scalars['Int']>;
  qrMax?: Maybe<Scalars['String']>;
  qrMin?: Maybe<Scalars['String']>;
};

export type SeedFilter = {
  and?: InputMaybe<Array<InputMaybe<SeedFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SeedHasFilter>>>;
  not?: InputMaybe<SeedFilter>;
  or?: InputMaybe<Array<InputMaybe<SeedFilter>>>;
};

export enum SeedHasFilter {
  Qr = 'qr'
}

export type SeedOrder = {
  asc?: InputMaybe<SeedOrderable>;
  desc?: InputMaybe<SeedOrderable>;
  then?: InputMaybe<SeedOrder>;
};

export enum SeedOrderable {
  Qr = 'qr'
}

export type SeedPatch = {
  qr?: InputMaybe<Scalars['String']>;
};

export type SeedRef = {
  qr?: InputMaybe<Scalars['String']>;
};

export type Shelf = {
  __typename?: 'Shelf';
  id: Scalars['ID'];
  numSites: Scalars['Int'];
  parentModule?: Maybe<Module>;
  sites?: Maybe<Array<Maybe<Site>>>;
  sitesAggregate?: Maybe<SiteAggregateResult>;
  verticalClearanceHeightToNextShelf: Scalars['Int'];
  xid: Scalars['String'];
};


export type ShelfParentModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
};


export type ShelfSitesArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SiteOrder>;
};


export type ShelfSitesAggregateArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type ShelfAggregateResult = {
  __typename?: 'ShelfAggregateResult';
  count?: Maybe<Scalars['Int']>;
  verticalClearanceHeightToNextShelfAvg?: Maybe<Scalars['Float']>;
  verticalClearanceHeightToNextShelfMax?: Maybe<Scalars['Int']>;
  verticalClearanceHeightToNextShelfMin?: Maybe<Scalars['Int']>;
  verticalClearanceHeightToNextShelfSum?: Maybe<Scalars['Int']>;
  xidMax?: Maybe<Scalars['String']>;
  xidMin?: Maybe<Scalars['String']>;
};

export type ShelfFilter = {
  and?: InputMaybe<Array<InputMaybe<ShelfFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ShelfHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<ShelfFilter>;
  or?: InputMaybe<Array<InputMaybe<ShelfFilter>>>;
  xid?: InputMaybe<StringHashFilter>;
};

export enum ShelfHasFilter {
  ParentModule = 'parentModule',
  Sites = 'sites',
  VerticalClearanceHeightToNextShelf = 'verticalClearanceHeightToNextShelf',
  Xid = 'xid'
}

export type ShelfOrder = {
  asc?: InputMaybe<ShelfOrderable>;
  desc?: InputMaybe<ShelfOrderable>;
  then?: InputMaybe<ShelfOrder>;
};

export enum ShelfOrderable {
  VerticalClearanceHeightToNextShelf = 'verticalClearanceHeightToNextShelf',
  Xid = 'xid'
}

export type ShelfPatch = {
  parentModule?: InputMaybe<ModuleRef>;
  sites?: InputMaybe<Array<InputMaybe<SiteRef>>>;
  verticalClearanceHeightToNextShelf?: InputMaybe<Scalars['Int']>;
};

export type ShelfRef = {
  id?: InputMaybe<Scalars['ID']>;
  parentModule?: InputMaybe<ModuleRef>;
  sites?: InputMaybe<Array<InputMaybe<SiteRef>>>;
  verticalClearanceHeightToNextShelf?: InputMaybe<Scalars['Int']>;
  xid?: InputMaybe<Scalars['String']>;
};

export type Signal = {
  __typename?: 'Signal';
  algoString?: Maybe<Scalars['String']>;
  daysToGerminate?: Maybe<Scalars['Int']>;
  growTime?: Maybe<Scalars['Int']>;
  maxHarvTime?: Maybe<Scalars['Int']>;
  moduleType: Scalars['String'];
  plantId?: Maybe<Scalars['String']>;
  plantName: Scalars['String'];
  signalDate: Scalars['DateTime'];
  signalType: SignalType;
  targetMessage?: Maybe<Scalars['String']>;
};

export type SignalAggregateResult = {
  __typename?: 'SignalAggregateResult';
  algoStringMax?: Maybe<Scalars['String']>;
  algoStringMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  daysToGerminateAvg?: Maybe<Scalars['Float']>;
  daysToGerminateMax?: Maybe<Scalars['Int']>;
  daysToGerminateMin?: Maybe<Scalars['Int']>;
  daysToGerminateSum?: Maybe<Scalars['Int']>;
  growTimeAvg?: Maybe<Scalars['Float']>;
  growTimeMax?: Maybe<Scalars['Int']>;
  growTimeMin?: Maybe<Scalars['Int']>;
  growTimeSum?: Maybe<Scalars['Int']>;
  maxHarvTimeAvg?: Maybe<Scalars['Float']>;
  maxHarvTimeMax?: Maybe<Scalars['Int']>;
  maxHarvTimeMin?: Maybe<Scalars['Int']>;
  maxHarvTimeSum?: Maybe<Scalars['Int']>;
  moduleTypeMax?: Maybe<Scalars['String']>;
  moduleTypeMin?: Maybe<Scalars['String']>;
  plantIdMax?: Maybe<Scalars['String']>;
  plantIdMin?: Maybe<Scalars['String']>;
  plantNameMax?: Maybe<Scalars['String']>;
  plantNameMin?: Maybe<Scalars['String']>;
  signalDateMax?: Maybe<Scalars['DateTime']>;
  signalDateMin?: Maybe<Scalars['DateTime']>;
  targetMessageMax?: Maybe<Scalars['String']>;
  targetMessageMin?: Maybe<Scalars['String']>;
};

export type SignalFilter = {
  and?: InputMaybe<Array<InputMaybe<SignalFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SignalHasFilter>>>;
  not?: InputMaybe<SignalFilter>;
  or?: InputMaybe<Array<InputMaybe<SignalFilter>>>;
};

export enum SignalHasFilter {
  AlgoString = 'algoString',
  DaysToGerminate = 'daysToGerminate',
  GrowTime = 'growTime',
  MaxHarvTime = 'maxHarvTime',
  ModuleType = 'moduleType',
  PlantId = 'plantId',
  PlantName = 'plantName',
  SignalDate = 'signalDate',
  SignalType = 'signalType',
  TargetMessage = 'targetMessage'
}

export type SignalOrder = {
  asc?: InputMaybe<SignalOrderable>;
  desc?: InputMaybe<SignalOrderable>;
  then?: InputMaybe<SignalOrder>;
};

export enum SignalOrderable {
  AlgoString = 'algoString',
  DaysToGerminate = 'daysToGerminate',
  GrowTime = 'growTime',
  MaxHarvTime = 'maxHarvTime',
  ModuleType = 'moduleType',
  PlantId = 'plantId',
  PlantName = 'plantName',
  SignalDate = 'signalDate',
  TargetMessage = 'targetMessage'
}

export type SignalPatch = {
  algoString?: InputMaybe<Scalars['String']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  growTime?: InputMaybe<Scalars['Int']>;
  maxHarvTime?: InputMaybe<Scalars['Int']>;
  moduleType?: InputMaybe<Scalars['String']>;
  plantId?: InputMaybe<Scalars['String']>;
  plantName?: InputMaybe<Scalars['String']>;
  signalDate?: InputMaybe<Scalars['DateTime']>;
  signalType?: InputMaybe<SignalType>;
  targetMessage?: InputMaybe<Scalars['String']>;
};

export type SignalRef = {
  algoString?: InputMaybe<Scalars['String']>;
  daysToGerminate?: InputMaybe<Scalars['Int']>;
  growTime?: InputMaybe<Scalars['Int']>;
  maxHarvTime?: InputMaybe<Scalars['Int']>;
  moduleType?: InputMaybe<Scalars['String']>;
  plantId?: InputMaybe<Scalars['String']>;
  plantName?: InputMaybe<Scalars['String']>;
  signalDate?: InputMaybe<Scalars['DateTime']>;
  signalType?: InputMaybe<SignalType>;
  targetMessage?: InputMaybe<Scalars['String']>;
};

export type SignalTable = {
  __typename?: 'SignalTable';
  signals: Array<Signal>;
  signalsAggregate?: Maybe<SignalAggregateResult>;
};


export type SignalTableSignalsArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SignalOrder>;
};


export type SignalTableSignalsAggregateArgs = {
  filter?: InputMaybe<SignalFilter>;
};

export type SignalTableAggregateResult = {
  __typename?: 'SignalTableAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type SignalTableFilter = {
  and?: InputMaybe<Array<InputMaybe<SignalTableFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SignalTableHasFilter>>>;
  not?: InputMaybe<SignalTableFilter>;
  or?: InputMaybe<Array<InputMaybe<SignalTableFilter>>>;
};

export enum SignalTableHasFilter {
  Signals = 'signals'
}

export type SignalTablePatch = {
  signals?: InputMaybe<Array<SignalRef>>;
};

export type SignalTableRef = {
  signals?: InputMaybe<Array<SignalRef>>;
};

export enum SignalType {
  Germinate = 'GERMINATE',
  Harvest = 'HARVEST',
  Transfer = 'TRANSFER'
}

export type Site = {
  __typename?: 'Site';
  id: Scalars['ID'];
  occupant?: Maybe<Plant>;
  xid: Scalars['String'];
};


export type SiteOccupantArgs = {
  filter?: InputMaybe<PlantFilter>;
};

export type SiteAggregateResult = {
  __typename?: 'SiteAggregateResult';
  count?: Maybe<Scalars['Int']>;
  xidMax?: Maybe<Scalars['String']>;
  xidMin?: Maybe<Scalars['String']>;
};

export type SiteFilter = {
  and?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SiteHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<SiteFilter>;
  or?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
  xid?: InputMaybe<StringHashFilter>;
};

export enum SiteHasFilter {
  Occupant = 'occupant',
  Xid = 'xid'
}

export type SiteOrder = {
  asc?: InputMaybe<SiteOrderable>;
  desc?: InputMaybe<SiteOrderable>;
  then?: InputMaybe<SiteOrder>;
};

export enum SiteOrderable {
  Xid = 'xid'
}

export type SitePatch = {
  occupant?: InputMaybe<PlantRef>;
};

export type SiteRef = {
  id?: InputMaybe<Scalars['ID']>;
  occupant?: InputMaybe<PlantRef>;
  xid?: InputMaybe<Scalars['String']>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type UpdateCropInput = {
  filter: CropFilter;
  remove?: InputMaybe<CropPatch>;
  set?: InputMaybe<CropPatch>;
};

export type UpdateCropIntentionInput = {
  filter: CropIntentionFilter;
  remove?: InputMaybe<CropIntentionPatch>;
  set?: InputMaybe<CropIntentionPatch>;
};

export type UpdateCropIntentionPayload = {
  __typename?: 'UpdateCropIntentionPayload';
  cropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCropIntentionPayloadCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropIntentionOrder>;
};

export type UpdateCropIntentionsListInput = {
  filter: CropIntentionsListFilter;
  remove?: InputMaybe<CropIntentionsListPatch>;
  set?: InputMaybe<CropIntentionsListPatch>;
};

export type UpdateCropIntentionsListPayload = {
  __typename?: 'UpdateCropIntentionsListPayload';
  cropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCropIntentionsListPayloadCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UpdateCropPayload = {
  __typename?: 'UpdateCropPayload';
  crop?: Maybe<Array<Maybe<Crop>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCropPayloadCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CropOrder>;
};

export type UpdateDrawerInput = {
  filter: DrawerFilter;
  remove?: InputMaybe<DrawerPatch>;
  set?: InputMaybe<DrawerPatch>;
};

export type UpdateDrawerPayload = {
  __typename?: 'UpdateDrawerPayload';
  drawer?: Maybe<Array<Maybe<Drawer>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateDrawerPayloadDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrawerOrder>;
};

export type UpdateGerminationTrayInput = {
  filter: GerminationTrayFilter;
  remove?: InputMaybe<GerminationTrayPatch>;
  set?: InputMaybe<GerminationTrayPatch>;
};

export type UpdateGerminationTrayPayload = {
  __typename?: 'UpdateGerminationTrayPayload';
  germinationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateGerminationTrayPayloadGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GerminationTrayOrder>;
};

export type UpdateGrowPlateInput = {
  filter: GrowPlateFilter;
  remove?: InputMaybe<GrowPlatePatch>;
  set?: InputMaybe<GrowPlatePatch>;
};

export type UpdateGrowPlatePayload = {
  __typename?: 'UpdateGrowPlatePayload';
  growPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateGrowPlatePayloadGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GrowPlateOrder>;
};

export type UpdateLocationInput = {
  filter: LocationFilter;
  remove?: InputMaybe<LocationPatch>;
  set?: InputMaybe<LocationPatch>;
};

export type UpdateLocationPayload = {
  __typename?: 'UpdateLocationPayload';
  location?: Maybe<Array<Maybe<Location>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateLocationPayloadLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<LocationOrder>;
};

export type UpdateModuleInput = {
  filter: ModuleFilter;
  remove?: InputMaybe<ModulePatch>;
  set?: InputMaybe<ModulePatch>;
};

export type UpdateModuleMapInput = {
  filter: ModuleMapFilter;
  remove?: InputMaybe<ModuleMapPatch>;
  set?: InputMaybe<ModuleMapPatch>;
};

export type UpdateModuleMapPayload = {
  __typename?: 'UpdateModuleMapPayload';
  moduleMap?: Maybe<Array<Maybe<ModuleMap>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateModuleMapPayloadModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleMapOrder>;
};

export type UpdateModulePayload = {
  __typename?: 'UpdateModulePayload';
  module?: Maybe<Array<Maybe<Module>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateModulePayloadModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ModuleOrder>;
};

export type UpdateNurseryInput = {
  filter: NurseryFilter;
  remove?: InputMaybe<NurseryPatch>;
  set?: InputMaybe<NurseryPatch>;
};

export type UpdateNurseryPayload = {
  __typename?: 'UpdateNurseryPayload';
  numUids?: Maybe<Scalars['Int']>;
  nursery?: Maybe<Array<Maybe<Nursery>>>;
};


export type UpdateNurseryPayloadNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<NurseryOrder>;
};

export type UpdatePlantInput = {
  filter: PlantFilter;
  remove?: InputMaybe<PlantPatch>;
  set?: InputMaybe<PlantPatch>;
};

export type UpdatePlantPayload = {
  __typename?: 'UpdatePlantPayload';
  numUids?: Maybe<Scalars['Int']>;
  plant?: Maybe<Array<Maybe<Plant>>>;
};


export type UpdatePlantPayloadPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PlantOrder>;
};

export type UpdateSeedInput = {
  filter: SeedFilter;
  remove?: InputMaybe<SeedPatch>;
  set?: InputMaybe<SeedPatch>;
};

export type UpdateSeedPayload = {
  __typename?: 'UpdateSeedPayload';
  numUids?: Maybe<Scalars['Int']>;
  seed?: Maybe<Array<Maybe<Seed>>>;
};


export type UpdateSeedPayloadSeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SeedOrder>;
};

export type UpdateShelfInput = {
  filter: ShelfFilter;
  remove?: InputMaybe<ShelfPatch>;
  set?: InputMaybe<ShelfPatch>;
};

export type UpdateShelfPayload = {
  __typename?: 'UpdateShelfPayload';
  numUids?: Maybe<Scalars['Int']>;
  shelf?: Maybe<Array<Maybe<Shelf>>>;
};


export type UpdateShelfPayloadShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ShelfOrder>;
};

export type UpdateSignalInput = {
  filter: SignalFilter;
  remove?: InputMaybe<SignalPatch>;
  set?: InputMaybe<SignalPatch>;
};

export type UpdateSignalPayload = {
  __typename?: 'UpdateSignalPayload';
  numUids?: Maybe<Scalars['Int']>;
  signal?: Maybe<Array<Maybe<Signal>>>;
};


export type UpdateSignalPayloadSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SignalOrder>;
};

export type UpdateSignalTableInput = {
  filter: SignalTableFilter;
  remove?: InputMaybe<SignalTablePatch>;
  set?: InputMaybe<SignalTablePatch>;
};

export type UpdateSignalTablePayload = {
  __typename?: 'UpdateSignalTablePayload';
  numUids?: Maybe<Scalars['Int']>;
  signalTable?: Maybe<Array<Maybe<SignalTable>>>;
};


export type UpdateSignalTablePayloadSignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UpdateSiteInput = {
  filter: SiteFilter;
  remove?: InputMaybe<SitePatch>;
  set?: InputMaybe<SitePatch>;
};

export type UpdateSitePayload = {
  __typename?: 'UpdateSitePayload';
  numUids?: Maybe<Scalars['Int']>;
  site?: Maybe<Array<Maybe<Site>>>;
};


export type UpdateSitePayloadSiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SiteOrder>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type TwoNums = {
  one: Scalars['Int'];
  two: Scalars['Int'];
};

export type IngestQrMutationVariables = Exact<{ [key: string]: never; }>;


export type IngestQrMutation = { __typename?: 'Mutation', ingestQR: string };

export type GetIntentionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIntentionListQuery = { __typename?: 'Query', queryCropIntentionsList?: Array<{ __typename?: 'CropIntentionsList', cropIntentions: Array<{ __typename?: 'CropIntention', harvestPerWeek: number, crop: { __typename?: 'Crop', id: string, xid: string, name: string, required_module_type: string } }> } | null> | null, queryModuleMap?: Array<{ __typename?: 'ModuleMap', modules?: Array<{ __typename?: 'Module', id: string, instantiationTemplateUsed: ModuleType, totalNumberOfSites: number, shelves?: Array<{ __typename?: 'Shelf', id: string } | null> | null } | null> | null } | null> | null };

export type ExampleLambdaQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleLambdaQuery = { __typename?: 'Query', exampleLambda: string };

export type WheresChuckQueryVariables = Exact<{ [key: string]: never; }>;


export type WheresChuckQuery = { __typename?: 'Query', querySite?: Array<{ __typename?: 'Site', id: string, occupant?: { __typename?: 'Plant', xid: string } | null } | null> | null };

export type InstallTwoModulesMutationVariables = Exact<{
  moduleInput: Scalars['String'];
}>;


export type InstallTwoModulesMutation = { __typename?: 'Mutation', addModuleMap?: { __typename?: 'AddModuleMapPayload', moduleMap?: Array<{ __typename?: 'ModuleMap', modules?: Array<{ __typename?: 'Module', id: string, xid: string, shelves?: Array<{ __typename?: 'Shelf', id: string, xid: string, sites?: Array<{ __typename?: 'Site', id: string, xid: string, occupant?: { __typename?: 'Plant', id: string, xid: string, cropName: string, germinatedDate?: any | null } | null } | null> | null } | null> | null } | null> | null } | null> | null } | null };

export type InstantiateCropIntentionsMutationVariables = Exact<{ [key: string]: never; }>;


export type InstantiateCropIntentionsMutation = { __typename?: 'Mutation', addCropIntentionsList?: { __typename?: 'AddCropIntentionsListPayload', numUids?: number | null, cropIntentionsList?: Array<{ __typename?: 'CropIntentionsList', cropIntentions: Array<{ __typename?: 'CropIntention', crop: { __typename?: 'Crop', required_module_type: string, repeater: boolean } }> } | null> | null } | null };

export type InstantiateNurseryMutationVariables = Exact<{ [key: string]: never; }>;


export type InstantiateNurseryMutation = { __typename?: 'Mutation', addNursery?: { __typename?: 'AddNurseryPayload', nursery?: Array<{ __typename?: 'Nursery', id: string, xid: string, GerminationTrays: Array<{ __typename?: 'GerminationTray', sitesAvailable: number }> } | null> | null } | null };


export const IngestQrDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IngestQR"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingestQR"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"qr"},"value":{"kind":"StringValue","value":"0xdeadbeef","block":false}}]}]}}]} as unknown as DocumentNode<IngestQrMutation, IngestQrMutationVariables>;
export const GetIntentionListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIntentionList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryCropIntentionsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"required_module_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"harvestPerWeek"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"queryModuleMap"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"instantiationTemplateUsed"}},{"kind":"Field","name":{"kind":"Name","value":"shelves"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalNumberOfSites"}}]}}]}}]}}]} as unknown as DocumentNode<GetIntentionListQuery, GetIntentionListQueryVariables>;
export const ExampleLambdaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleLambda"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exampleLambda"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exampleStringInput"},"value":{"kind":"StringValue","value":"gahhhh","block":false}}]}]}}]} as unknown as DocumentNode<ExampleLambdaQuery, ExampleLambdaQueryVariables>;
export const WheresChuckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WheresChuck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"querySite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"occupant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xid"}}]}}]}}]}}]} as unknown as DocumentNode<WheresChuckQuery, WheresChuckQueryVariables>;
export const InstallTwoModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstallTwoModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addModuleMap"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"xid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"modules"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"instantiationTemplateUsed"},"value":{"kind":"EnumValue","value":"DWC_12in_NutrientMixA"}},{"kind":"ObjectField","name":{"kind":"Name","value":"xid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shelves"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"xid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"verticalClearanceHeightToNextShelf"},"value":{"kind":"IntValue","value":"13"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"xid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"occupant"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"xid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"cropName"},"value":{"kind":"StringValue","value":"someCrop","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"repeater"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"nutrientType"},"value":{"kind":"StringValue","value":"0.3:A|0.7:B","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"germinatedDate"},"value":{"kind":"StringValue","value":"2023-05-09T02:45:48Z","block":false}}]}}]}]}}]}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moduleMap"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"shelves"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"occupant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"cropName"}},{"kind":"Field","name":{"kind":"Name","value":"germinatedDate"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstallTwoModulesMutation, InstallTwoModulesMutationVariables>;
export const InstantiateCropIntentionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstantiateCropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCropIntentionsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cropIntentions"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"crop"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"arugi","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"xid"},"value":{"kind":"StringValue","value":"adfaj","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"required_module_type"},"value":{"kind":"StringValue","value":"nutA","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"repeater"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"days_harvestable"},"value":{"kind":"IntValue","value":"5"}},{"kind":"ObjectField","name":{"kind":"Name","value":"days_from_transfer_to_first_harvest"},"value":{"kind":"IntValue","value":"6"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"harvestPerWeek"},"value":{"kind":"IntValue","value":"3"}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"cropIntentionsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required_module_type"}},{"kind":"Field","name":{"kind":"Name","value":"repeater"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstantiateCropIntentionsMutation, InstantiateCropIntentionsMutationVariables>;
export const InstantiateNurseryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstantiateNursery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNursery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"xid"},"value":{"kind":"StringValue","value":"helloPlantiii","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"GerminationTrays"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sitesAvailable"},"value":{"kind":"IntValue","value":"18"}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nursery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"GerminationTrays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sitesAvailable"}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstantiateNurseryMutation, InstantiateNurseryMutationVariables>;