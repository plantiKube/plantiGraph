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

export type AddDriveOutputsPresetInput = {
  boolArrayString: Scalars['String'];
  lxEndpoint: EndpointRef;
};

export type AddDriveOutputsPresetPayload = {
  __typename?: 'AddDriveOutputsPresetPayload';
  driveOutputsPreset?: Maybe<Array<Maybe<DriveOutputsPreset>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddDriveOutputsPresetPayloadDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};

export type AddEndpointInput = {
  addr: IpAddrRef;
  port: PortRef;
};

export type AddEndpointPayload = {
  __typename?: 'AddEndpointPayload';
  endpoint?: Maybe<Array<Maybe<Endpoint>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddEndpointPayloadEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AddGerminationTrayInput = {
  sites: Array<SiteRef>;
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

export type AddIpAddrInput = {
  addr: Scalars['String'];
};

export type AddIpAddrPayload = {
  __typename?: 'AddIpAddrPayload';
  ipAddr?: Maybe<Array<Maybe<IpAddr>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddIpAddrPayloadIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<IpAddrOrder>;
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
};

export type AddModuleMapInput = {
  modules?: InputMaybe<Array<InputMaybe<ModuleRef>>>;
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
};

export type AddNurseryInput = {
  GerminationTrays: Array<GerminationTrayRef>;
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
};

export type AddPhysicalSolenoidInput = {
  driveState: Scalars['Boolean'];
  influxOutputCurrentTimeSeries?: InputMaybe<TimeSeriesRef>;
  outputDriveAddr: IpAddrRef;
  outputDriveIndex: Scalars['Int'];
};

export type AddPhysicalSolenoidPayload = {
  __typename?: 'AddPhysicalSolenoidPayload';
  numUids?: Maybe<Scalars['Int']>;
  physicalSolenoid?: Maybe<Array<Maybe<PhysicalSolenoid>>>;
};


export type AddPhysicalSolenoidPayloadPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
};

export type AddPlantInput = {
  cropName: Scalars['String'];
  germinatedDate?: InputMaybe<Scalars['DateTime']>;
  harvestedDate?: InputMaybe<Scalars['DateTime']>;
  location?: InputMaybe<SiteRef>;
  nutrientType: Scalars['String'];
  repeater: Scalars['Boolean'];
  transferredDate?: InputMaybe<Scalars['DateTime']>;
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

export type AddPortInput = {
  port: Scalars['Int'];
};

export type AddPortPayload = {
  __typename?: 'AddPortPayload';
  numUids?: Maybe<Scalars['Int']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type AddPortPayloadPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PortOrder>;
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
  moduleType?: InputMaybe<Scalars['String']>;
  plantId?: InputMaybe<Scalars['String']>;
  plantName?: InputMaybe<Scalars['String']>;
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
  signal?: InputMaybe<SignalRef>;
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
};

export type AddTimeSeriesInput = {
  addrInfluxInstance: IpAddrRef;
  portInfluxInstance: PortRef;
  streamPath: Scalars['String'];
};

export type AddTimeSeriesPayload = {
  __typename?: 'AddTimeSeriesPayload';
  numUids?: Maybe<Scalars['Int']>;
  timeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
};


export type AddTimeSeriesPayloadTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TimeSeriesOrder>;
};

export type AddWaterRoutePresetsInput = {
  presets: Array<DriveOutputsPresetRef>;
};

export type AddWaterRoutePresetsPayload = {
  __typename?: 'AddWaterRoutePresetsPayload';
  numUids?: Maybe<Scalars['Int']>;
  waterRoutePresets?: Maybe<Array<Maybe<WaterRoutePresets>>>;
};


export type AddWaterRoutePresetsPayloadWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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
};

export type CropFilter = {
  and?: InputMaybe<Array<InputMaybe<CropFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CropHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<CropFilter>;
  or?: InputMaybe<Array<InputMaybe<CropFilter>>>;
};

export enum CropHasFilter {
  DaysFromTransferToFirstHarvest = 'days_from_transfer_to_first_harvest',
  DaysHarvestable = 'days_harvestable',
  Name = 'name',
  Repeater = 'repeater',
  RequiredModuleType = 'required_module_type'
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
  RequiredModuleType = 'required_module_type'
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

export type DeleteDriveOutputsPresetPayload = {
  __typename?: 'DeleteDriveOutputsPresetPayload';
  driveOutputsPreset?: Maybe<Array<Maybe<DriveOutputsPreset>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteDriveOutputsPresetPayloadDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};

export type DeleteEndpointPayload = {
  __typename?: 'DeleteEndpointPayload';
  endpoint?: Maybe<Array<Maybe<Endpoint>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteEndpointPayloadEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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

export type DeleteIpAddrPayload = {
  __typename?: 'DeleteIpAddrPayload';
  ipAddr?: Maybe<Array<Maybe<IpAddr>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteIpAddrPayloadIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<IpAddrOrder>;
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
};

export type DeletePhysicalSolenoidPayload = {
  __typename?: 'DeletePhysicalSolenoidPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  physicalSolenoid?: Maybe<Array<Maybe<PhysicalSolenoid>>>;
};


export type DeletePhysicalSolenoidPayloadPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
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

export type DeletePortPayload = {
  __typename?: 'DeletePortPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type DeletePortPayloadPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PortOrder>;
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
};

export type DeleteTimeSeriesPayload = {
  __typename?: 'DeleteTimeSeriesPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  timeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
};


export type DeleteTimeSeriesPayloadTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TimeSeriesOrder>;
};

export type DeleteWaterRoutePresetsPayload = {
  __typename?: 'DeleteWaterRoutePresetsPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  waterRoutePresets?: Maybe<Array<Maybe<WaterRoutePresets>>>;
};


export type DeleteWaterRoutePresetsPayloadWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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

export type DriveOutputsPreset = {
  __typename?: 'DriveOutputsPreset';
  boolArrayString: Scalars['String'];
  id: Scalars['ID'];
  lxEndpoint: Endpoint;
};


export type DriveOutputsPresetLxEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
};

export type DriveOutputsPresetAggregateResult = {
  __typename?: 'DriveOutputsPresetAggregateResult';
  boolArrayStringMax?: Maybe<Scalars['String']>;
  boolArrayStringMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
};

export type DriveOutputsPresetFilter = {
  and?: InputMaybe<Array<InputMaybe<DriveOutputsPresetFilter>>>;
  has?: InputMaybe<Array<InputMaybe<DriveOutputsPresetHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<DriveOutputsPresetFilter>;
  or?: InputMaybe<Array<InputMaybe<DriveOutputsPresetFilter>>>;
};

export enum DriveOutputsPresetHasFilter {
  BoolArrayString = 'boolArrayString',
  LxEndpoint = 'lxEndpoint'
}

export type DriveOutputsPresetOrder = {
  asc?: InputMaybe<DriveOutputsPresetOrderable>;
  desc?: InputMaybe<DriveOutputsPresetOrderable>;
  then?: InputMaybe<DriveOutputsPresetOrder>;
};

export enum DriveOutputsPresetOrderable {
  BoolArrayString = 'boolArrayString'
}

export type DriveOutputsPresetPatch = {
  boolArrayString?: InputMaybe<Scalars['String']>;
  lxEndpoint?: InputMaybe<EndpointRef>;
};

export type DriveOutputsPresetRef = {
  boolArrayString?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lxEndpoint?: InputMaybe<EndpointRef>;
};

export type Endpoint = {
  __typename?: 'Endpoint';
  addr: IpAddr;
  id: Scalars['ID'];
  port: Port;
};


export type EndpointAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
};


export type EndpointPortArgs = {
  filter?: InputMaybe<PortFilter>;
};

export type EndpointAggregateResult = {
  __typename?: 'EndpointAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type EndpointFilter = {
  and?: InputMaybe<Array<InputMaybe<EndpointFilter>>>;
  has?: InputMaybe<Array<InputMaybe<EndpointHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<EndpointFilter>;
  or?: InputMaybe<Array<InputMaybe<EndpointFilter>>>;
};

export enum EndpointHasFilter {
  Addr = 'addr',
  Port = 'port'
}

export type EndpointPatch = {
  addr?: InputMaybe<IpAddrRef>;
  port?: InputMaybe<PortRef>;
};

export type EndpointRef = {
  addr?: InputMaybe<IpAddrRef>;
  id?: InputMaybe<Scalars['ID']>;
  port?: InputMaybe<PortRef>;
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
};


export type GerminationTraySitesArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type GerminationTraySitesAggregateArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type GerminationTrayAggregateResult = {
  __typename?: 'GerminationTrayAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type GerminationTrayFilter = {
  and?: InputMaybe<Array<InputMaybe<GerminationTrayFilter>>>;
  has?: InputMaybe<Array<InputMaybe<GerminationTrayHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<GerminationTrayFilter>;
  or?: InputMaybe<Array<InputMaybe<GerminationTrayFilter>>>;
};

export enum GerminationTrayHasFilter {
  Sites = 'sites'
}

export type GerminationTrayPatch = {
  sites?: InputMaybe<Array<SiteRef>>;
};

export type GerminationTrayRef = {
  id?: InputMaybe<Scalars['ID']>;
  sites?: InputMaybe<Array<SiteRef>>;
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

export type IpAddr = {
  __typename?: 'IpAddr';
  addr: Scalars['String'];
};

export type IpAddrAggregateResult = {
  __typename?: 'IpAddrAggregateResult';
  addrMax?: Maybe<Scalars['String']>;
  addrMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
};

export type IpAddrFilter = {
  and?: InputMaybe<Array<InputMaybe<IpAddrFilter>>>;
  has?: InputMaybe<Array<InputMaybe<IpAddrHasFilter>>>;
  not?: InputMaybe<IpAddrFilter>;
  or?: InputMaybe<Array<InputMaybe<IpAddrFilter>>>;
};

export enum IpAddrHasFilter {
  Addr = 'addr'
}

export type IpAddrOrder = {
  asc?: InputMaybe<IpAddrOrderable>;
  desc?: InputMaybe<IpAddrOrderable>;
  then?: InputMaybe<IpAddrOrder>;
};

export enum IpAddrOrderable {
  Addr = 'addr'
}

export type IpAddrPatch = {
  addr?: InputMaybe<Scalars['String']>;
};

export type IpAddrRef = {
  addr?: InputMaybe<Scalars['String']>;
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
};

export type ModuleFilter = {
  and?: InputMaybe<Array<InputMaybe<ModuleFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ModuleHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<ModuleFilter>;
  or?: InputMaybe<Array<InputMaybe<ModuleFilter>>>;
};

export enum ModuleHasFilter {
  InstantiationTemplateUsed = 'instantiationTemplateUsed',
  NutrientMix = 'nutrientMix',
  Shelves = 'shelves'
}

export type ModuleMap = {
  __typename?: 'ModuleMap';
  id: Scalars['ID'];
  modules?: Maybe<Array<Maybe<Module>>>;
  modulesAggregate?: Maybe<ModuleAggregateResult>;
};


export type ModuleMapModulesArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ModuleMapModulesAggregateArgs = {
  filter?: InputMaybe<ModuleFilter>;
};

export type ModuleMapAggregateResult = {
  __typename?: 'ModuleMapAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type ModuleMapFilter = {
  and?: InputMaybe<Array<InputMaybe<ModuleMapFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ModuleMapHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<ModuleMapFilter>;
  or?: InputMaybe<Array<InputMaybe<ModuleMapFilter>>>;
};

export enum ModuleMapHasFilter {
  Modules = 'modules'
}

export type ModuleMapPatch = {
  modules?: InputMaybe<Array<InputMaybe<ModuleRef>>>;
};

export type ModuleMapRef = {
  id?: InputMaybe<Scalars['ID']>;
  modules?: InputMaybe<Array<InputMaybe<ModuleRef>>>;
};

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
  addDriveOutputsPreset?: Maybe<AddDriveOutputsPresetPayload>;
  addEndpoint?: Maybe<AddEndpointPayload>;
  addGerminationTray?: Maybe<AddGerminationTrayPayload>;
  addGrowPlate?: Maybe<AddGrowPlatePayload>;
  addIpAddr?: Maybe<AddIpAddrPayload>;
  addLocation?: Maybe<AddLocationPayload>;
  addModule?: Maybe<AddModulePayload>;
  addModuleMap?: Maybe<AddModuleMapPayload>;
  addNursery?: Maybe<AddNurseryPayload>;
  addPhysicalSolenoid?: Maybe<AddPhysicalSolenoidPayload>;
  addPlant?: Maybe<AddPlantPayload>;
  addPort?: Maybe<AddPortPayload>;
  addSeed?: Maybe<AddSeedPayload>;
  addShelf?: Maybe<AddShelfPayload>;
  addSignal?: Maybe<AddSignalPayload>;
  addSignalTable?: Maybe<AddSignalTablePayload>;
  addSite?: Maybe<AddSitePayload>;
  addTimeSeries?: Maybe<AddTimeSeriesPayload>;
  addWaterRoutePresets?: Maybe<AddWaterRoutePresetsPayload>;
  deleteCrop?: Maybe<DeleteCropPayload>;
  deleteCropIntention?: Maybe<DeleteCropIntentionPayload>;
  deleteCropIntentionsList?: Maybe<DeleteCropIntentionsListPayload>;
  deleteDrawer?: Maybe<DeleteDrawerPayload>;
  deleteDriveOutputsPreset?: Maybe<DeleteDriveOutputsPresetPayload>;
  deleteEndpoint?: Maybe<DeleteEndpointPayload>;
  deleteGerminationTray?: Maybe<DeleteGerminationTrayPayload>;
  deleteGrowPlate?: Maybe<DeleteGrowPlatePayload>;
  deleteIpAddr?: Maybe<DeleteIpAddrPayload>;
  deleteLocation?: Maybe<DeleteLocationPayload>;
  deleteModule?: Maybe<DeleteModulePayload>;
  deleteModuleMap?: Maybe<DeleteModuleMapPayload>;
  deleteNursery?: Maybe<DeleteNurseryPayload>;
  deletePhysicalSolenoid?: Maybe<DeletePhysicalSolenoidPayload>;
  deletePlant?: Maybe<DeletePlantPayload>;
  deletePort?: Maybe<DeletePortPayload>;
  deleteSeed?: Maybe<DeleteSeedPayload>;
  deleteShelf?: Maybe<DeleteShelfPayload>;
  deleteSignal?: Maybe<DeleteSignalPayload>;
  deleteSignalTable?: Maybe<DeleteSignalTablePayload>;
  deleteSite?: Maybe<DeleteSitePayload>;
  deleteTimeSeries?: Maybe<DeleteTimeSeriesPayload>;
  deleteWaterRoutePresets?: Maybe<DeleteWaterRoutePresetsPayload>;
  ingestQR: Scalars['String'];
  updateCrop?: Maybe<UpdateCropPayload>;
  updateCropIntention?: Maybe<UpdateCropIntentionPayload>;
  updateCropIntentionsList?: Maybe<UpdateCropIntentionsListPayload>;
  updateDrawer?: Maybe<UpdateDrawerPayload>;
  updateDriveOutputsPreset?: Maybe<UpdateDriveOutputsPresetPayload>;
  updateEndpoint?: Maybe<UpdateEndpointPayload>;
  updateGerminationTray?: Maybe<UpdateGerminationTrayPayload>;
  updateGrowPlate?: Maybe<UpdateGrowPlatePayload>;
  updateIpAddr?: Maybe<UpdateIpAddrPayload>;
  updateLocation?: Maybe<UpdateLocationPayload>;
  updateModule?: Maybe<UpdateModulePayload>;
  updateModuleMap?: Maybe<UpdateModuleMapPayload>;
  updateNursery?: Maybe<UpdateNurseryPayload>;
  updatePhysicalSolenoid?: Maybe<UpdatePhysicalSolenoidPayload>;
  updatePlant?: Maybe<UpdatePlantPayload>;
  updatePort?: Maybe<UpdatePortPayload>;
  updateSeed?: Maybe<UpdateSeedPayload>;
  updateShelf?: Maybe<UpdateShelfPayload>;
  updateSignal?: Maybe<UpdateSignalPayload>;
  updateSignalTable?: Maybe<UpdateSignalTablePayload>;
  updateSite?: Maybe<UpdateSitePayload>;
  updateTimeSeries?: Maybe<UpdateTimeSeriesPayload>;
  updateWaterRoutePresets?: Maybe<UpdateWaterRoutePresetsPayload>;
};


export type MutationAddCropArgs = {
  input: Array<AddCropInput>;
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


export type MutationAddDriveOutputsPresetArgs = {
  input: Array<AddDriveOutputsPresetInput>;
};


export type MutationAddEndpointArgs = {
  input: Array<AddEndpointInput>;
};


export type MutationAddGerminationTrayArgs = {
  input: Array<AddGerminationTrayInput>;
};


export type MutationAddGrowPlateArgs = {
  input: Array<AddGrowPlateInput>;
};


export type MutationAddIpAddrArgs = {
  input: Array<AddIpAddrInput>;
};


export type MutationAddLocationArgs = {
  input: Array<AddLocationInput>;
};


export type MutationAddModuleArgs = {
  input: Array<AddModuleInput>;
};


export type MutationAddModuleMapArgs = {
  input: Array<AddModuleMapInput>;
};


export type MutationAddNurseryArgs = {
  input: Array<AddNurseryInput>;
};


export type MutationAddPhysicalSolenoidArgs = {
  input: Array<AddPhysicalSolenoidInput>;
};


export type MutationAddPlantArgs = {
  input: Array<AddPlantInput>;
};


export type MutationAddPortArgs = {
  input: Array<AddPortInput>;
};


export type MutationAddSeedArgs = {
  input: Array<AddSeedInput>;
};


export type MutationAddShelfArgs = {
  input: Array<AddShelfInput>;
};


export type MutationAddSignalArgs = {
  input: Array<AddSignalInput>;
};


export type MutationAddSignalTableArgs = {
  input: Array<AddSignalTableInput>;
};


export type MutationAddSiteArgs = {
  input: Array<AddSiteInput>;
};


export type MutationAddTimeSeriesArgs = {
  input: Array<AddTimeSeriesInput>;
};


export type MutationAddWaterRoutePresetsArgs = {
  input: Array<AddWaterRoutePresetsInput>;
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


export type MutationDeleteDriveOutputsPresetArgs = {
  filter: DriveOutputsPresetFilter;
};


export type MutationDeleteEndpointArgs = {
  filter: EndpointFilter;
};


export type MutationDeleteGerminationTrayArgs = {
  filter: GerminationTrayFilter;
};


export type MutationDeleteGrowPlateArgs = {
  filter: GrowPlateFilter;
};


export type MutationDeleteIpAddrArgs = {
  filter: IpAddrFilter;
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


export type MutationDeletePhysicalSolenoidArgs = {
  filter: PhysicalSolenoidFilter;
};


export type MutationDeletePlantArgs = {
  filter: PlantFilter;
};


export type MutationDeletePortArgs = {
  filter: PortFilter;
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


export type MutationDeleteTimeSeriesArgs = {
  filter: TimeSeriesFilter;
};


export type MutationDeleteWaterRoutePresetsArgs = {
  filter: WaterRoutePresetsFilter;
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


export type MutationUpdateDriveOutputsPresetArgs = {
  input: UpdateDriveOutputsPresetInput;
};


export type MutationUpdateEndpointArgs = {
  input: UpdateEndpointInput;
};


export type MutationUpdateGerminationTrayArgs = {
  input: UpdateGerminationTrayInput;
};


export type MutationUpdateGrowPlateArgs = {
  input: UpdateGrowPlateInput;
};


export type MutationUpdateIpAddrArgs = {
  input: UpdateIpAddrInput;
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


export type MutationUpdatePhysicalSolenoidArgs = {
  input: UpdatePhysicalSolenoidInput;
};


export type MutationUpdatePlantArgs = {
  input: UpdatePlantInput;
};


export type MutationUpdatePortArgs = {
  input: UpdatePortInput;
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


export type MutationUpdateTimeSeriesArgs = {
  input: UpdateTimeSeriesInput;
};


export type MutationUpdateWaterRoutePresetsArgs = {
  input: UpdateWaterRoutePresetsInput;
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
};


export type NurseryGerminationTraysArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type NurseryGerminationTraysAggregateArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
};

export type NurseryAggregateResult = {
  __typename?: 'NurseryAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type NurseryFilter = {
  and?: InputMaybe<Array<InputMaybe<NurseryFilter>>>;
  has?: InputMaybe<Array<InputMaybe<NurseryHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<NurseryFilter>;
  or?: InputMaybe<Array<InputMaybe<NurseryFilter>>>;
};

export enum NurseryHasFilter {
  GerminationTrays = 'GerminationTrays'
}

export type NurseryPatch = {
  GerminationTrays?: InputMaybe<Array<GerminationTrayRef>>;
};

export type NurseryRef = {
  GerminationTrays?: InputMaybe<Array<GerminationTrayRef>>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum NutrientMix {
  A = 'A',
  B = 'B'
}

export type PhysicalSolenoid = {
  __typename?: 'PhysicalSolenoid';
  driveState: Scalars['Boolean'];
  id: Scalars['ID'];
  influxOutputCurrentTimeSeries?: Maybe<TimeSeries>;
  outputDriveAddr: IpAddr;
  outputDriveIndex: Scalars['Int'];
};


export type PhysicalSolenoidInfluxOutputCurrentTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
};


export type PhysicalSolenoidOutputDriveAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
};

export type PhysicalSolenoidAggregateResult = {
  __typename?: 'PhysicalSolenoidAggregateResult';
  count?: Maybe<Scalars['Int']>;
  outputDriveIndexAvg?: Maybe<Scalars['Float']>;
  outputDriveIndexMax?: Maybe<Scalars['Int']>;
  outputDriveIndexMin?: Maybe<Scalars['Int']>;
  outputDriveIndexSum?: Maybe<Scalars['Int']>;
};

export type PhysicalSolenoidFilter = {
  and?: InputMaybe<Array<InputMaybe<PhysicalSolenoidFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PhysicalSolenoidHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<PhysicalSolenoidFilter>;
  or?: InputMaybe<Array<InputMaybe<PhysicalSolenoidFilter>>>;
};

export enum PhysicalSolenoidHasFilter {
  DriveState = 'driveState',
  InfluxOutputCurrentTimeSeries = 'influxOutputCurrentTimeSeries',
  OutputDriveAddr = 'outputDriveAddr',
  OutputDriveIndex = 'outputDriveIndex'
}

export type PhysicalSolenoidOrder = {
  asc?: InputMaybe<PhysicalSolenoidOrderable>;
  desc?: InputMaybe<PhysicalSolenoidOrderable>;
  then?: InputMaybe<PhysicalSolenoidOrder>;
};

export enum PhysicalSolenoidOrderable {
  OutputDriveIndex = 'outputDriveIndex'
}

export type PhysicalSolenoidPatch = {
  driveState?: InputMaybe<Scalars['Boolean']>;
  influxOutputCurrentTimeSeries?: InputMaybe<TimeSeriesRef>;
  outputDriveAddr?: InputMaybe<IpAddrRef>;
  outputDriveIndex?: InputMaybe<Scalars['Int']>;
};

export type PhysicalSolenoidRef = {
  driveState?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  influxOutputCurrentTimeSeries?: InputMaybe<TimeSeriesRef>;
  outputDriveAddr?: InputMaybe<IpAddrRef>;
  outputDriveIndex?: InputMaybe<Scalars['Int']>;
};

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
};

export enum PlantHasFilter {
  CropName = 'cropName',
  GerminatedDate = 'germinatedDate',
  HarvestedDate = 'harvestedDate',
  Location = 'location',
  NutrientType = 'nutrientType',
  Repeater = 'repeater',
  TransferredDate = 'transferredDate'
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
  TransferredDate = 'transferredDate'
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

export type Port = {
  __typename?: 'Port';
  port: Scalars['Int'];
};

export type PortAggregateResult = {
  __typename?: 'PortAggregateResult';
  count?: Maybe<Scalars['Int']>;
  portAvg?: Maybe<Scalars['Float']>;
  portMax?: Maybe<Scalars['Int']>;
  portMin?: Maybe<Scalars['Int']>;
  portSum?: Maybe<Scalars['Int']>;
};

export type PortFilter = {
  and?: InputMaybe<Array<InputMaybe<PortFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PortHasFilter>>>;
  not?: InputMaybe<PortFilter>;
  or?: InputMaybe<Array<InputMaybe<PortFilter>>>;
};

export enum PortHasFilter {
  Port = 'port'
}

export type PortOrder = {
  asc?: InputMaybe<PortOrderable>;
  desc?: InputMaybe<PortOrderable>;
  then?: InputMaybe<PortOrder>;
};

export enum PortOrderable {
  Port = 'port'
}

export type PortPatch = {
  port?: InputMaybe<Scalars['Int']>;
};

export type PortRef = {
  port?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  addTwo: Scalars['Int'];
  aggregateCrop?: Maybe<CropAggregateResult>;
  aggregateCropIntention?: Maybe<CropIntentionAggregateResult>;
  aggregateCropIntentionsList?: Maybe<CropIntentionsListAggregateResult>;
  aggregateDrawer?: Maybe<DrawerAggregateResult>;
  aggregateDriveOutputsPreset?: Maybe<DriveOutputsPresetAggregateResult>;
  aggregateEndpoint?: Maybe<EndpointAggregateResult>;
  aggregateGerminationTray?: Maybe<GerminationTrayAggregateResult>;
  aggregateGrowPlate?: Maybe<GrowPlateAggregateResult>;
  aggregateIpAddr?: Maybe<IpAddrAggregateResult>;
  aggregateLocation?: Maybe<LocationAggregateResult>;
  aggregateModule?: Maybe<ModuleAggregateResult>;
  aggregateModuleMap?: Maybe<ModuleMapAggregateResult>;
  aggregateNursery?: Maybe<NurseryAggregateResult>;
  aggregatePhysicalSolenoid?: Maybe<PhysicalSolenoidAggregateResult>;
  aggregatePlant?: Maybe<PlantAggregateResult>;
  aggregatePort?: Maybe<PortAggregateResult>;
  aggregateSeed?: Maybe<SeedAggregateResult>;
  aggregateShelf?: Maybe<ShelfAggregateResult>;
  aggregateSignal?: Maybe<SignalAggregateResult>;
  aggregateSignalTable?: Maybe<SignalTableAggregateResult>;
  aggregateSite?: Maybe<SiteAggregateResult>;
  aggregateTimeSeries?: Maybe<TimeSeriesAggregateResult>;
  aggregateWaterRoutePresets?: Maybe<WaterRoutePresetsAggregateResult>;
  exampleLambda: Scalars['String'];
  getCrop?: Maybe<Crop>;
  getDriveOutputsPreset?: Maybe<DriveOutputsPreset>;
  getEndpoint?: Maybe<Endpoint>;
  getGerminationTray?: Maybe<GerminationTray>;
  getModule?: Maybe<Module>;
  getModuleMap?: Maybe<ModuleMap>;
  getNursery?: Maybe<Nursery>;
  getPhysicalSolenoid?: Maybe<PhysicalSolenoid>;
  getPlant?: Maybe<Plant>;
  getShelf?: Maybe<Shelf>;
  getSignal?: Maybe<Signal>;
  getSignalTable?: Maybe<SignalTable>;
  getSite?: Maybe<Site>;
  getTimeSeries?: Maybe<TimeSeries>;
  getWaterRoutePresets?: Maybe<WaterRoutePresets>;
  queryCrop?: Maybe<Array<Maybe<Crop>>>;
  queryCropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  queryCropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  queryDrawer?: Maybe<Array<Maybe<Drawer>>>;
  queryDriveOutputsPreset?: Maybe<Array<Maybe<DriveOutputsPreset>>>;
  queryEndpoint?: Maybe<Array<Maybe<Endpoint>>>;
  queryGerminationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  queryGrowPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  queryIpAddr?: Maybe<Array<Maybe<IpAddr>>>;
  queryLocation?: Maybe<Array<Maybe<Location>>>;
  queryModule?: Maybe<Array<Maybe<Module>>>;
  queryModuleMap?: Maybe<Array<Maybe<ModuleMap>>>;
  queryNursery?: Maybe<Array<Maybe<Nursery>>>;
  queryPhysicalSolenoid?: Maybe<Array<Maybe<PhysicalSolenoid>>>;
  queryPlant?: Maybe<Array<Maybe<Plant>>>;
  queryPort?: Maybe<Array<Maybe<Port>>>;
  querySeed?: Maybe<Array<Maybe<Seed>>>;
  queryShelf?: Maybe<Array<Maybe<Shelf>>>;
  querySignal?: Maybe<Array<Maybe<Signal>>>;
  querySignalTable?: Maybe<Array<Maybe<SignalTable>>>;
  querySite?: Maybe<Array<Maybe<Site>>>;
  queryTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  queryWaterRoutePresets?: Maybe<Array<Maybe<WaterRoutePresets>>>;
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


export type QueryAggregateDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
};


export type QueryAggregateEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
};


export type QueryAggregateGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
};


export type QueryAggregateGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
};


export type QueryAggregateIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
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


export type QueryAggregatePhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
};


export type QueryAggregatePlantArgs = {
  filter?: InputMaybe<PlantFilter>;
};


export type QueryAggregatePortArgs = {
  filter?: InputMaybe<PortFilter>;
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


export type QueryAggregateTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
};


export type QueryAggregateWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
};


export type QueryExampleLambdaArgs = {
  exampleStringInput: Scalars['String'];
};


export type QueryGetCropArgs = {
  id: Scalars['ID'];
};


export type QueryGetDriveOutputsPresetArgs = {
  id: Scalars['ID'];
};


export type QueryGetEndpointArgs = {
  id: Scalars['ID'];
};


export type QueryGetGerminationTrayArgs = {
  id: Scalars['ID'];
};


export type QueryGetModuleArgs = {
  id: Scalars['ID'];
};


export type QueryGetModuleMapArgs = {
  id: Scalars['ID'];
};


export type QueryGetNurseryArgs = {
  id: Scalars['ID'];
};


export type QueryGetPhysicalSolenoidArgs = {
  id: Scalars['ID'];
};


export type QueryGetPlantArgs = {
  id: Scalars['ID'];
};


export type QueryGetShelfArgs = {
  id: Scalars['ID'];
};


export type QueryGetSignalArgs = {
  id: Scalars['ID'];
};


export type QueryGetSignalTableArgs = {
  id: Scalars['ID'];
};


export type QueryGetSiteArgs = {
  id: Scalars['ID'];
};


export type QueryGetTimeSeriesArgs = {
  id: Scalars['ID'];
};


export type QueryGetWaterRoutePresetsArgs = {
  id: Scalars['ID'];
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


export type QueryQueryDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};


export type QueryQueryEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQueryGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQueryGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GrowPlateOrder>;
};


export type QueryQueryIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<IpAddrOrder>;
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
};


export type QueryQueryModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQueryNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryQueryPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
};


export type QueryQueryPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PlantOrder>;
};


export type QueryQueryPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PortOrder>;
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
};


export type QueryQueryTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TimeSeriesOrder>;
};


export type QueryQueryWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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
};


export type ShelfParentModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
};


export type ShelfSitesArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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
};

export type ShelfFilter = {
  and?: InputMaybe<Array<InputMaybe<ShelfFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ShelfHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<ShelfFilter>;
  or?: InputMaybe<Array<InputMaybe<ShelfFilter>>>;
};

export enum ShelfHasFilter {
  ParentModule = 'parentModule',
  Sites = 'sites',
  VerticalClearanceHeightToNextShelf = 'verticalClearanceHeightToNextShelf'
}

export type ShelfOrder = {
  asc?: InputMaybe<ShelfOrderable>;
  desc?: InputMaybe<ShelfOrderable>;
  then?: InputMaybe<ShelfOrder>;
};

export enum ShelfOrderable {
  VerticalClearanceHeightToNextShelf = 'verticalClearanceHeightToNextShelf'
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
};

export type Signal = {
  __typename?: 'Signal';
  algoString?: Maybe<Scalars['String']>;
  daysToGerminate?: Maybe<Scalars['Int']>;
  growTime?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  maxHarvTime?: Maybe<Scalars['Int']>;
  moduleType?: Maybe<Scalars['String']>;
  plantId?: Maybe<Scalars['String']>;
  plantName?: Maybe<Scalars['String']>;
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
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<SignalFilter>;
  or?: InputMaybe<Array<InputMaybe<SignalFilter>>>;
  signalDate?: InputMaybe<DateTimeFilter>;
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
  id?: InputMaybe<Scalars['ID']>;
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
  id: Scalars['ID'];
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
  id?: InputMaybe<Array<Scalars['ID']>>;
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
  id?: InputMaybe<Scalars['ID']>;
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
  signal?: Maybe<Signal>;
};


export type SiteOccupantArgs = {
  filter?: InputMaybe<PlantFilter>;
};


export type SiteSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
};

export type SiteAggregateResult = {
  __typename?: 'SiteAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type SiteFilter = {
  and?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SiteHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<SiteFilter>;
  or?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
};

export enum SiteHasFilter {
  Occupant = 'occupant',
  Signal = 'signal'
}

export type SitePatch = {
  occupant?: InputMaybe<PlantRef>;
  signal?: InputMaybe<SignalRef>;
};

export type SiteRef = {
  id?: InputMaybe<Scalars['ID']>;
  occupant?: InputMaybe<PlantRef>;
  signal?: InputMaybe<SignalRef>;
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

export type TimeSeries = {
  __typename?: 'TimeSeries';
  addrInfluxInstance: IpAddr;
  id: Scalars['ID'];
  portInfluxInstance: Port;
  streamPath: Scalars['String'];
};


export type TimeSeriesAddrInfluxInstanceArgs = {
  filter?: InputMaybe<IpAddrFilter>;
};


export type TimeSeriesPortInfluxInstanceArgs = {
  filter?: InputMaybe<PortFilter>;
};

export type TimeSeriesAggregateResult = {
  __typename?: 'TimeSeriesAggregateResult';
  count?: Maybe<Scalars['Int']>;
  streamPathMax?: Maybe<Scalars['String']>;
  streamPathMin?: Maybe<Scalars['String']>;
};

export type TimeSeriesFilter = {
  and?: InputMaybe<Array<InputMaybe<TimeSeriesFilter>>>;
  has?: InputMaybe<Array<InputMaybe<TimeSeriesHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<TimeSeriesFilter>;
  or?: InputMaybe<Array<InputMaybe<TimeSeriesFilter>>>;
};

export enum TimeSeriesHasFilter {
  AddrInfluxInstance = 'addrInfluxInstance',
  PortInfluxInstance = 'portInfluxInstance',
  StreamPath = 'streamPath'
}

export type TimeSeriesOrder = {
  asc?: InputMaybe<TimeSeriesOrderable>;
  desc?: InputMaybe<TimeSeriesOrderable>;
  then?: InputMaybe<TimeSeriesOrder>;
};

export enum TimeSeriesOrderable {
  StreamPath = 'streamPath'
}

export type TimeSeriesPatch = {
  addrInfluxInstance?: InputMaybe<IpAddrRef>;
  portInfluxInstance?: InputMaybe<PortRef>;
  streamPath?: InputMaybe<Scalars['String']>;
};

export type TimeSeriesRef = {
  addrInfluxInstance?: InputMaybe<IpAddrRef>;
  id?: InputMaybe<Scalars['ID']>;
  portInfluxInstance?: InputMaybe<PortRef>;
  streamPath?: InputMaybe<Scalars['String']>;
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

export type UpdateDriveOutputsPresetInput = {
  filter: DriveOutputsPresetFilter;
  remove?: InputMaybe<DriveOutputsPresetPatch>;
  set?: InputMaybe<DriveOutputsPresetPatch>;
};

export type UpdateDriveOutputsPresetPayload = {
  __typename?: 'UpdateDriveOutputsPresetPayload';
  driveOutputsPreset?: Maybe<Array<Maybe<DriveOutputsPreset>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateDriveOutputsPresetPayloadDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};

export type UpdateEndpointInput = {
  filter: EndpointFilter;
  remove?: InputMaybe<EndpointPatch>;
  set?: InputMaybe<EndpointPatch>;
};

export type UpdateEndpointPayload = {
  __typename?: 'UpdateEndpointPayload';
  endpoint?: Maybe<Array<Maybe<Endpoint>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateEndpointPayloadEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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

export type UpdateIpAddrInput = {
  filter: IpAddrFilter;
  remove?: InputMaybe<IpAddrPatch>;
  set?: InputMaybe<IpAddrPatch>;
};

export type UpdateIpAddrPayload = {
  __typename?: 'UpdateIpAddrPayload';
  ipAddr?: Maybe<Array<Maybe<IpAddr>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateIpAddrPayloadIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<IpAddrOrder>;
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
};

export type UpdatePhysicalSolenoidInput = {
  filter: PhysicalSolenoidFilter;
  remove?: InputMaybe<PhysicalSolenoidPatch>;
  set?: InputMaybe<PhysicalSolenoidPatch>;
};

export type UpdatePhysicalSolenoidPayload = {
  __typename?: 'UpdatePhysicalSolenoidPayload';
  numUids?: Maybe<Scalars['Int']>;
  physicalSolenoid?: Maybe<Array<Maybe<PhysicalSolenoid>>>;
};


export type UpdatePhysicalSolenoidPayloadPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
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

export type UpdatePortInput = {
  filter: PortFilter;
  remove?: InputMaybe<PortPatch>;
  set?: InputMaybe<PortPatch>;
};

export type UpdatePortPayload = {
  __typename?: 'UpdatePortPayload';
  numUids?: Maybe<Scalars['Int']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type UpdatePortPayloadPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PortOrder>;
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
};

export type UpdateTimeSeriesInput = {
  filter: TimeSeriesFilter;
  remove?: InputMaybe<TimeSeriesPatch>;
  set?: InputMaybe<TimeSeriesPatch>;
};

export type UpdateTimeSeriesPayload = {
  __typename?: 'UpdateTimeSeriesPayload';
  numUids?: Maybe<Scalars['Int']>;
  timeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
};


export type UpdateTimeSeriesPayloadTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<TimeSeriesOrder>;
};

export type UpdateWaterRoutePresetsInput = {
  filter: WaterRoutePresetsFilter;
  remove?: InputMaybe<WaterRoutePresetsPatch>;
  set?: InputMaybe<WaterRoutePresetsPatch>;
};

export type UpdateWaterRoutePresetsPayload = {
  __typename?: 'UpdateWaterRoutePresetsPayload';
  numUids?: Maybe<Scalars['Int']>;
  waterRoutePresets?: Maybe<Array<Maybe<WaterRoutePresets>>>;
};


export type UpdateWaterRoutePresetsPayloadWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type WaterRoutePresets = {
  __typename?: 'WaterRoutePresets';
  id: Scalars['ID'];
  presets: Array<DriveOutputsPreset>;
  presetsAggregate?: Maybe<DriveOutputsPresetAggregateResult>;
};


export type WaterRoutePresetsPresetsArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};


export type WaterRoutePresetsPresetsAggregateArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
};

export type WaterRoutePresetsAggregateResult = {
  __typename?: 'WaterRoutePresetsAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export type WaterRoutePresetsFilter = {
  and?: InputMaybe<Array<InputMaybe<WaterRoutePresetsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<WaterRoutePresetsHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<WaterRoutePresetsFilter>;
  or?: InputMaybe<Array<InputMaybe<WaterRoutePresetsFilter>>>;
};

export enum WaterRoutePresetsHasFilter {
  Presets = 'presets'
}

export type WaterRoutePresetsPatch = {
  presets?: InputMaybe<Array<DriveOutputsPresetRef>>;
};

export type WaterRoutePresetsRef = {
  id?: InputMaybe<Scalars['ID']>;
  presets?: InputMaybe<Array<DriveOutputsPresetRef>>;
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


export type GetIntentionListQuery = { __typename?: 'Query', queryCropIntentionsList?: Array<{ __typename?: 'CropIntentionsList', cropIntentions: Array<{ __typename?: 'CropIntention', harvestPerWeek: number, crop: { __typename?: 'Crop', id: string, name: string, required_module_type: string } }> } | null> | null, queryModuleMap?: Array<{ __typename?: 'ModuleMap', modules?: Array<{ __typename?: 'Module', id: string, instantiationTemplateUsed: ModuleType, totalNumberOfSites: number, shelves?: Array<{ __typename?: 'Shelf', id: string } | null> | null } | null> | null } | null> | null };

export type ExampleLambdaQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleLambdaQuery = { __typename?: 'Query', exampleLambda: string };

export type WheresChuckQueryVariables = Exact<{ [key: string]: never; }>;


export type WheresChuckQuery = { __typename?: 'Query', querySite?: Array<{ __typename?: 'Site', id: string } | null> | null };

export type InstallTwoModulesMutationVariables = Exact<{
  moduleInput: Scalars['String'];
}>;


export type InstallTwoModulesMutation = { __typename?: 'Mutation', addModuleMap?: { __typename?: 'AddModuleMapPayload', moduleMap?: Array<{ __typename?: 'ModuleMap', modules?: Array<{ __typename?: 'Module', id: string, shelves?: Array<{ __typename?: 'Shelf', id: string, sites?: Array<{ __typename?: 'Site', id: string, occupant?: { __typename?: 'Plant', id: string, cropName: string, germinatedDate?: any | null } | null } | null> | null } | null> | null } | null> | null } | null> | null } | null };

export type InstantiateCropIntentionsMutationVariables = Exact<{ [key: string]: never; }>;


export type InstantiateCropIntentionsMutation = { __typename?: 'Mutation', addCropIntentionsList?: { __typename?: 'AddCropIntentionsListPayload', numUids?: number | null, cropIntentionsList?: Array<{ __typename?: 'CropIntentionsList', cropIntentions: Array<{ __typename?: 'CropIntention', crop: { __typename?: 'Crop', required_module_type: string, repeater: boolean } }> } | null> | null } | null };

export type CreateGermTrayMutationVariables = Exact<{
  xidInput: Scalars['String'];
  sitesInput: Array<SiteRef> | SiteRef;
}>;


export type CreateGermTrayMutation = { __typename?: 'Mutation', addGerminationTray?: { __typename?: 'AddGerminationTrayPayload', germinationTray?: Array<{ __typename?: 'GerminationTray', id: string, sites: Array<{ __typename?: 'Site', signal?: { __typename?: 'Signal', signalDate: any } | null }> } | null> | null } | null };

export type InstantiateNurseryMutationVariables = Exact<{
  germTraysArray: Array<GerminationTrayRef> | GerminationTrayRef;
}>;


export type InstantiateNurseryMutation = { __typename?: 'Mutation', addNursery?: { __typename?: 'AddNurseryPayload', nursery?: Array<{ __typename?: 'Nursery', id: string, GerminationTrays: Array<{ __typename?: 'GerminationTray', sites: Array<{ __typename?: 'Site', signal?: { __typename?: 'Signal', signalType: SignalType } | null }> }> } | null> | null } | null };


export const IngestQrDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IngestQR"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingestQR"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"qr"},"value":{"kind":"StringValue","value":"0xdeadbeef","block":false}}]}]}}]} as unknown as DocumentNode<IngestQrMutation, IngestQrMutationVariables>;
export const GetIntentionListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIntentionList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryCropIntentionsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"required_module_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"harvestPerWeek"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"queryModuleMap"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"instantiationTemplateUsed"}},{"kind":"Field","name":{"kind":"Name","value":"shelves"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalNumberOfSites"}}]}}]}}]}}]} as unknown as DocumentNode<GetIntentionListQuery, GetIntentionListQueryVariables>;
export const ExampleLambdaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleLambda"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exampleLambda"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exampleStringInput"},"value":{"kind":"StringValue","value":"gahhhh","block":false}}]}]}}]} as unknown as DocumentNode<ExampleLambdaQuery, ExampleLambdaQueryVariables>;
export const WheresChuckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WheresChuck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"querySite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<WheresChuckQuery, WheresChuckQueryVariables>;
export const InstallTwoModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstallTwoModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addModuleMap"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"modules"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"instantiationTemplateUsed"},"value":{"kind":"EnumValue","value":"DWC_12in_NutrientMixA"}},{"kind":"ObjectField","name":{"kind":"Name","value":"shelves"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verticalClearanceHeightToNextShelf"},"value":{"kind":"IntValue","value":"13"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occupant"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cropName"},"value":{"kind":"StringValue","value":"someCrop","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"repeater"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"nutrientType"},"value":{"kind":"StringValue","value":"0.3:A|0.7:B","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"germinatedDate"},"value":{"kind":"StringValue","value":"2023-05-09T02:45:48Z","block":false}}]}}]}]}}]}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moduleMap"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shelves"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"occupant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cropName"}},{"kind":"Field","name":{"kind":"Name","value":"germinatedDate"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstallTwoModulesMutation, InstallTwoModulesMutationVariables>;
export const InstantiateCropIntentionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstantiateCropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCropIntentionsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cropIntentions"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"crop"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"arugi","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"required_module_type"},"value":{"kind":"StringValue","value":"nutA","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"repeater"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"days_harvestable"},"value":{"kind":"IntValue","value":"5"}},{"kind":"ObjectField","name":{"kind":"Name","value":"days_from_transfer_to_first_harvest"},"value":{"kind":"IntValue","value":"6"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"harvestPerWeek"},"value":{"kind":"IntValue","value":"3"}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"cropIntentionsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required_module_type"}},{"kind":"Field","name":{"kind":"Name","value":"repeater"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstantiateCropIntentionsMutation, InstantiateCropIntentionsMutationVariables>;
export const CreateGermTrayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGermTray"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"xidInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sitesInput"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteRef"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGerminationTray"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sitesInput"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"germinationTray"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signalDate"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateGermTrayMutation, CreateGermTrayMutationVariables>;
export const InstantiateNurseryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstantiateNursery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"germTraysArray"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GerminationTrayRef"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNursery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GerminationTrays"},"value":{"kind":"Variable","name":{"kind":"Name","value":"germTraysArray"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nursery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"GerminationTrays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signalType"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstantiateNurseryMutation, InstantiateNurseryMutationVariables>;