import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 mins 50.52 secs after the 23rd hour of Apr 12th 1985 in UTC.
   */
  DateTime: { input: any; output: any; }
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: { input: any; output: any; }
};

export type AddAutomationClockInput = {
  clockNodes: Array<ClockNodePointRef>;
};

export type AddAutomationClockPayload = {
  __typename?: 'AddAutomationClockPayload';
  automationClock?: Maybe<Array<Maybe<AutomationClock>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddAutomationClockPayloadAutomationClockArgs = {
  filter?: InputMaybe<AutomationClockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddChosenDriveOutputPresetInput = {
  preset: DriveOutputsPresetRef;
};

export type AddChosenDriveOutputPresetPayload = {
  __typename?: 'AddChosenDriveOutputPresetPayload';
  chosenDriveOutputPreset?: Maybe<Array<Maybe<ChosenDriveOutputPreset>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddChosenDriveOutputPresetPayloadChosenDriveOutputPresetArgs = {
  filter?: InputMaybe<ChosenDriveOutputPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddClockNodePointInput = {
  oscPath: Scalars['String']['input'];
  outputState: Scalars['Int']['input'];
  ownedByClock?: InputMaybe<AutomationClockRef>;
  timeOfDay: Scalars['DateTime']['input'];
  xid: Scalars['Int']['input'];
};

export type AddClockNodePointPayload = {
  __typename?: 'AddClockNodePointPayload';
  clockNodePoint?: Maybe<Array<Maybe<ClockNodePoint>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddClockNodePointPayloadClockNodePointArgs = {
  filter?: InputMaybe<ClockNodePointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ClockNodePointOrder>;
};

export type AddCropInput = {
  days_from_transfer_to_first_harvest: Scalars['Int']['input'];
  days_harvestable: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  repeater: Scalars['Boolean']['input'];
  required_module_type: Scalars['String']['input'];
};

export type AddCropIntentionInput = {
  crop: CropRef;
  harvestPerWeek: Scalars['Int']['input'];
};

export type AddCropIntentionPayload = {
  __typename?: 'AddCropIntentionPayload';
  cropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCropIntentionPayloadCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CropIntentionOrder>;
};

export type AddCropIntentionsListInput = {
  cropIntentions: Array<CropIntentionRef>;
};

export type AddCropIntentionsListPayload = {
  __typename?: 'AddCropIntentionsListPayload';
  cropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCropIntentionsListPayloadCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddCropPayload = {
  __typename?: 'AddCropPayload';
  crop?: Maybe<Array<Maybe<Crop>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCropPayloadCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CropOrder>;
};

export type AddDrawerInput = {
  cropAssignment?: InputMaybe<CropRef>;
  gridLocation: LocationRef;
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type AddDrawerPayload = {
  __typename?: 'AddDrawerPayload';
  drawer?: Maybe<Array<Maybe<Drawer>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddDrawerPayloadDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DrawerOrder>;
};

export type AddDriveOutputsPresetInput = {
  boolArrayString: Scalars['String']['input'];
  lxEndpoint: EndpointRef;
};

export type AddDriveOutputsPresetPayload = {
  __typename?: 'AddDriveOutputsPresetPayload';
  driveOutputsPreset?: Maybe<Array<Maybe<DriveOutputsPreset>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddDriveOutputsPresetPayloadDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};

export type AddEndpointInput = {
  addr: IpAddrRef;
  port: PortRef;
};

export type AddEndpointPayload = {
  __typename?: 'AddEndpointPayload';
  endpoint?: Maybe<Array<Maybe<Endpoint>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddEndpointPayloadEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddExampleObjectInput = {
  someData: Scalars['String']['input'];
  someTime: Scalars['DateTime']['input'];
};

export type AddExampleObjectPayload = {
  __typename?: 'AddExampleObjectPayload';
  exampleObject?: Maybe<Array<Maybe<ExampleObject>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddExampleObjectPayloadExampleObjectArgs = {
  filter?: InputMaybe<ExampleObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ExampleObjectOrder>;
};

export type AddFlattenedSiteArrayInput = {
  sites: Array<SiteRef>;
};

export type AddFlattenedSiteArrayPayload = {
  __typename?: 'AddFlattenedSiteArrayPayload';
  flattenedSiteArray?: Maybe<Array<Maybe<FlattenedSiteArray>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddFlattenedSiteArrayPayloadFlattenedSiteArrayArgs = {
  filter?: InputMaybe<FlattenedSiteArrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddGerminationTrayInput = {
  sites: Array<SiteRef>;
};

export type AddGerminationTrayPayload = {
  __typename?: 'AddGerminationTrayPayload';
  germinationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddGerminationTrayPayloadGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddGrowPlateInput = {
  rawNetCupReading?: InputMaybe<Scalars['Int']['input']>;
};

export type AddGrowPlatePayload = {
  __typename?: 'AddGrowPlatePayload';
  growPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddGrowPlatePayloadGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GrowPlateOrder>;
};

export type AddIpAddrInput = {
  addr: Scalars['String']['input'];
};

export type AddIpAddrPayload = {
  __typename?: 'AddIpAddrPayload';
  ipAddr?: Maybe<Array<Maybe<IpAddr>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddIpAddrPayloadIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<IpAddrOrder>;
};

export type AddJonsObjectInput = {
  someData: Scalars['String']['input'];
  someTime: Scalars['DateTime']['input'];
};

export type AddJonsObjectPayload = {
  __typename?: 'AddJonsObjectPayload';
  jonsObject?: Maybe<Array<Maybe<JonsObject>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddJonsObjectPayloadJonsObjectArgs = {
  filter?: InputMaybe<JonsObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JonsObjectOrder>;
};

export type AddLocationInput = {
  x: Scalars['Int']['input'];
  y: Scalars['Int']['input'];
};

export type AddLocationPayload = {
  __typename?: 'AddLocationPayload';
  location?: Maybe<Array<Maybe<Location>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddLocationPayloadLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddModuleMapPayloadModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddModulePayload = {
  __typename?: 'AddModulePayload';
  module?: Maybe<Array<Maybe<Module>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddModulePayloadModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddNurseryInput = {
  GerminationTrays: Array<GerminationTrayRef>;
};

export type AddNurseryPayload = {
  __typename?: 'AddNurseryPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  nursery?: Maybe<Array<Maybe<Nursery>>>;
};


export type AddNurseryPayloadNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddPhysicalSolenoidInput = {
  driveState: Scalars['Boolean']['input'];
  influxOutputCurrentTimeSeries?: InputMaybe<TimeSeriesRef>;
  outputDriveAddr: IpAddrRef;
  outputDriveIndex: Scalars['Int']['input'];
};

export type AddPhysicalSolenoidPayload = {
  __typename?: 'AddPhysicalSolenoidPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  physicalSolenoid?: Maybe<Array<Maybe<PhysicalSolenoid>>>;
};


export type AddPhysicalSolenoidPayloadPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
};

export type AddPlantInput = {
  cropName: Scalars['String']['input'];
  germinatedDate?: InputMaybe<Scalars['DateTime']['input']>;
  harvestedDate?: InputMaybe<Scalars['DateTime']['input']>;
  location?: InputMaybe<SiteRef>;
  nutrientType: Scalars['String']['input'];
  repeater: Scalars['Boolean']['input'];
  transferredDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AddPlantPayload = {
  __typename?: 'AddPlantPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  plant?: Maybe<Array<Maybe<Plant>>>;
};


export type AddPlantPayloadPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlantOrder>;
};

export type AddPortInput = {
  port: Scalars['Int']['input'];
};

export type AddPortPayload = {
  __typename?: 'AddPortPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type AddPortPayloadPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PortOrder>;
};

export type AddSeedInput = {
  qr: Scalars['String']['input'];
};

export type AddSeedPayload = {
  __typename?: 'AddSeedPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  seed?: Maybe<Array<Maybe<Seed>>>;
};


export type AddSeedPayloadSeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SeedOrder>;
};

export type AddShelfInput = {
  parentModule?: InputMaybe<ModuleRef>;
  sites?: InputMaybe<Array<InputMaybe<SiteRef>>>;
  verticalClearanceHeightToNextShelf: Scalars['Int']['input'];
};

export type AddShelfPayload = {
  __typename?: 'AddShelfPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  shelf?: Maybe<Array<Maybe<Shelf>>>;
};


export type AddShelfPayloadShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ShelfOrder>;
};

export type AddSignalInput = {
  algoString?: InputMaybe<Scalars['String']['input']>;
  daysToGerminate?: InputMaybe<Scalars['Int']['input']>;
  growTime?: InputMaybe<Scalars['Int']['input']>;
  maxHarvTime?: InputMaybe<Scalars['Int']['input']>;
  moduleType?: InputMaybe<Scalars['String']['input']>;
  plantId?: InputMaybe<Scalars['String']['input']>;
  plantName?: InputMaybe<Scalars['String']['input']>;
  signalDate: Scalars['DateTime']['input'];
  signalType: SignalType;
  targetMessage?: InputMaybe<Scalars['String']['input']>;
};

export type AddSignalPayload = {
  __typename?: 'AddSignalPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  signal?: Maybe<Array<Maybe<Signal>>>;
};


export type AddSignalPayloadSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SignalOrder>;
};

export type AddSignalTableInput = {
  signals: Array<SignalRef>;
};

export type AddSignalTablePayload = {
  __typename?: 'AddSignalTablePayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  signalTable?: Maybe<Array<Maybe<SignalTable>>>;
};


export type AddSignalTablePayloadSignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AddSiteInput = {
  occupant?: InputMaybe<PlantRef>;
  signal?: InputMaybe<SignalRef>;
  uuid?: InputMaybe<Scalars['Int']['input']>;
};

export type AddSitePayload = {
  __typename?: 'AddSitePayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  site?: Maybe<Array<Maybe<Site>>>;
};


export type AddSitePayloadSiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SiteOrder>;
};

export type AddTimeSeriesInput = {
  addrInfluxInstance: IpAddrRef;
  portInfluxInstance: PortRef;
  streamPath: Scalars['String']['input'];
};

export type AddTimeSeriesPayload = {
  __typename?: 'AddTimeSeriesPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  timeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
};


export type AddTimeSeriesPayloadTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TimeSeriesOrder>;
};

export type AddWaterRoutePresetsInput = {
  presets: Array<DriveOutputsPresetRef>;
};

export type AddWaterRoutePresetsPayload = {
  __typename?: 'AddWaterRoutePresetsPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  waterRoutePresets?: Maybe<Array<Maybe<WaterRoutePresets>>>;
};


export type AddWaterRoutePresetsPayloadWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']['input']>;
};

export type AutomationClock = {
  __typename?: 'AutomationClock';
  clockNodes: Array<ClockNodePoint>;
  clockNodesAggregate?: Maybe<ClockNodePointAggregateResult>;
  id: Scalars['ID']['output'];
};


export type AutomationClockClockNodesArgs = {
  filter?: InputMaybe<ClockNodePointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ClockNodePointOrder>;
};


export type AutomationClockClockNodesAggregateArgs = {
  filter?: InputMaybe<ClockNodePointFilter>;
};

export type AutomationClockAggregateResult = {
  __typename?: 'AutomationClockAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type AutomationClockFilter = {
  and?: InputMaybe<Array<InputMaybe<AutomationClockFilter>>>;
  has?: InputMaybe<Array<InputMaybe<AutomationClockHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<AutomationClockFilter>;
  or?: InputMaybe<Array<InputMaybe<AutomationClockFilter>>>;
};

export enum AutomationClockHasFilter {
  ClockNodes = 'clockNodes'
}

export type AutomationClockPatch = {
  clockNodes?: InputMaybe<Array<ClockNodePointRef>>;
};

export type AutomationClockRef = {
  clockNodes?: InputMaybe<Array<ClockNodePointRef>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ChosenDriveOutputPreset = {
  __typename?: 'ChosenDriveOutputPreset';
  id: Scalars['ID']['output'];
  preset: DriveOutputsPreset;
};


export type ChosenDriveOutputPresetPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
};

export type ChosenDriveOutputPresetAggregateResult = {
  __typename?: 'ChosenDriveOutputPresetAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type ChosenDriveOutputPresetFilter = {
  and?: InputMaybe<Array<InputMaybe<ChosenDriveOutputPresetFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ChosenDriveOutputPresetHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<ChosenDriveOutputPresetFilter>;
  or?: InputMaybe<Array<InputMaybe<ChosenDriveOutputPresetFilter>>>;
};

export enum ChosenDriveOutputPresetHasFilter {
  Preset = 'preset'
}

export type ChosenDriveOutputPresetPatch = {
  preset?: InputMaybe<DriveOutputsPresetRef>;
};

export type ChosenDriveOutputPresetRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  preset?: InputMaybe<DriveOutputsPresetRef>;
};

export type ClockNodePoint = {
  __typename?: 'ClockNodePoint';
  azimuth: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  oscPath: Scalars['String']['output'];
  outputState: Scalars['Int']['output'];
  ownedByClock?: Maybe<AutomationClock>;
  timeOfDay: Scalars['DateTime']['output'];
  xid: Scalars['Int']['output'];
};


export type ClockNodePointOwnedByClockArgs = {
  filter?: InputMaybe<AutomationClockFilter>;
};

export type ClockNodePointAggregateResult = {
  __typename?: 'ClockNodePointAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  oscPathMax?: Maybe<Scalars['String']['output']>;
  oscPathMin?: Maybe<Scalars['String']['output']>;
  outputStateAvg?: Maybe<Scalars['Float']['output']>;
  outputStateMax?: Maybe<Scalars['Int']['output']>;
  outputStateMin?: Maybe<Scalars['Int']['output']>;
  outputStateSum?: Maybe<Scalars['Int']['output']>;
  timeOfDayMax?: Maybe<Scalars['DateTime']['output']>;
  timeOfDayMin?: Maybe<Scalars['DateTime']['output']>;
  xidAvg?: Maybe<Scalars['Float']['output']>;
  xidMax?: Maybe<Scalars['Int']['output']>;
  xidMin?: Maybe<Scalars['Int']['output']>;
  xidSum?: Maybe<Scalars['Int']['output']>;
};

export type ClockNodePointFilter = {
  and?: InputMaybe<Array<InputMaybe<ClockNodePointFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ClockNodePointHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<ClockNodePointFilter>;
  or?: InputMaybe<Array<InputMaybe<ClockNodePointFilter>>>;
  timeOfDay?: InputMaybe<DateTimeFilter>;
  xid?: InputMaybe<IntFilter>;
};

export enum ClockNodePointHasFilter {
  OscPath = 'oscPath',
  OutputState = 'outputState',
  OwnedByClock = 'ownedByClock',
  TimeOfDay = 'timeOfDay',
  Xid = 'xid'
}

export type ClockNodePointOrder = {
  asc?: InputMaybe<ClockNodePointOrderable>;
  desc?: InputMaybe<ClockNodePointOrderable>;
  then?: InputMaybe<ClockNodePointOrder>;
};

export enum ClockNodePointOrderable {
  OscPath = 'oscPath',
  OutputState = 'outputState',
  TimeOfDay = 'timeOfDay',
  Xid = 'xid'
}

export type ClockNodePointPatch = {
  oscPath?: InputMaybe<Scalars['String']['input']>;
  outputState?: InputMaybe<Scalars['Int']['input']>;
  ownedByClock?: InputMaybe<AutomationClockRef>;
  timeOfDay?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ClockNodePointRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  oscPath?: InputMaybe<Scalars['String']['input']>;
  outputState?: InputMaybe<Scalars['Int']['input']>;
  ownedByClock?: InputMaybe<AutomationClockRef>;
  timeOfDay?: InputMaybe<Scalars['DateTime']['input']>;
  xid?: InputMaybe<Scalars['Int']['input']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type Crop = {
  __typename?: 'Crop';
  days_from_transfer_to_first_harvest: Scalars['Int']['output'];
  days_harvestable: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  repeater: Scalars['Boolean']['output'];
  required_module_type: Scalars['String']['output'];
};

export type CropAggregateResult = {
  __typename?: 'CropAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  days_from_transfer_to_first_harvestAvg?: Maybe<Scalars['Float']['output']>;
  days_from_transfer_to_first_harvestMax?: Maybe<Scalars['Int']['output']>;
  days_from_transfer_to_first_harvestMin?: Maybe<Scalars['Int']['output']>;
  days_from_transfer_to_first_harvestSum?: Maybe<Scalars['Int']['output']>;
  days_harvestableAvg?: Maybe<Scalars['Float']['output']>;
  days_harvestableMax?: Maybe<Scalars['Int']['output']>;
  days_harvestableMin?: Maybe<Scalars['Int']['output']>;
  days_harvestableSum?: Maybe<Scalars['Int']['output']>;
  nameMax?: Maybe<Scalars['String']['output']>;
  nameMin?: Maybe<Scalars['String']['output']>;
  required_module_typeMax?: Maybe<Scalars['String']['output']>;
  required_module_typeMin?: Maybe<Scalars['String']['output']>;
};

export type CropFilter = {
  and?: InputMaybe<Array<InputMaybe<CropFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CropHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  harvestPerWeek: Scalars['Int']['output'];
};


export type CropIntentionCropArgs = {
  filter?: InputMaybe<CropFilter>;
};

export type CropIntentionAggregateResult = {
  __typename?: 'CropIntentionAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  harvestPerWeekAvg?: Maybe<Scalars['Float']['output']>;
  harvestPerWeekMax?: Maybe<Scalars['Int']['output']>;
  harvestPerWeekMin?: Maybe<Scalars['Int']['output']>;
  harvestPerWeekSum?: Maybe<Scalars['Int']['output']>;
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
  harvestPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

export type CropIntentionRef = {
  crop?: InputMaybe<CropRef>;
  harvestPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

export type CropIntentionsList = {
  __typename?: 'CropIntentionsList';
  cropIntentions: Array<CropIntention>;
  cropIntentionsAggregate?: Maybe<CropIntentionAggregateResult>;
};


export type CropIntentionsListCropIntentionsArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CropIntentionOrder>;
};


export type CropIntentionsListCropIntentionsAggregateArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
};

export type CropIntentionsListAggregateResult = {
  __typename?: 'CropIntentionsListAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
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
  days_from_transfer_to_first_harvest?: InputMaybe<Scalars['Int']['input']>;
  days_harvestable?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  repeater?: InputMaybe<Scalars['Boolean']['input']>;
  required_module_type?: InputMaybe<Scalars['String']['input']>;
};

export type CropRef = {
  days_from_transfer_to_first_harvest?: InputMaybe<Scalars['Int']['input']>;
  days_harvestable?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  repeater?: InputMaybe<Scalars['Boolean']['input']>;
  required_module_type?: InputMaybe<Scalars['String']['input']>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']['input']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  ge?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  le?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime']['input'];
  min: Scalars['DateTime']['input'];
};

export type DeleteAutomationClockPayload = {
  __typename?: 'DeleteAutomationClockPayload';
  automationClock?: Maybe<Array<Maybe<AutomationClock>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteAutomationClockPayloadAutomationClockArgs = {
  filter?: InputMaybe<AutomationClockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteChosenDriveOutputPresetPayload = {
  __typename?: 'DeleteChosenDriveOutputPresetPayload';
  chosenDriveOutputPreset?: Maybe<Array<Maybe<ChosenDriveOutputPreset>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteChosenDriveOutputPresetPayloadChosenDriveOutputPresetArgs = {
  filter?: InputMaybe<ChosenDriveOutputPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteClockNodePointPayload = {
  __typename?: 'DeleteClockNodePointPayload';
  clockNodePoint?: Maybe<Array<Maybe<ClockNodePoint>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteClockNodePointPayloadClockNodePointArgs = {
  filter?: InputMaybe<ClockNodePointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ClockNodePointOrder>;
};

export type DeleteCropIntentionPayload = {
  __typename?: 'DeleteCropIntentionPayload';
  cropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCropIntentionPayloadCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CropIntentionOrder>;
};

export type DeleteCropIntentionsListPayload = {
  __typename?: 'DeleteCropIntentionsListPayload';
  cropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCropIntentionsListPayloadCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteCropPayload = {
  __typename?: 'DeleteCropPayload';
  crop?: Maybe<Array<Maybe<Crop>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCropPayloadCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CropOrder>;
};

export type DeleteDrawerPayload = {
  __typename?: 'DeleteDrawerPayload';
  drawer?: Maybe<Array<Maybe<Drawer>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteDrawerPayloadDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DrawerOrder>;
};

export type DeleteDriveOutputsPresetPayload = {
  __typename?: 'DeleteDriveOutputsPresetPayload';
  driveOutputsPreset?: Maybe<Array<Maybe<DriveOutputsPreset>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteDriveOutputsPresetPayloadDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};

export type DeleteEndpointPayload = {
  __typename?: 'DeleteEndpointPayload';
  endpoint?: Maybe<Array<Maybe<Endpoint>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteEndpointPayloadEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteExampleObjectPayload = {
  __typename?: 'DeleteExampleObjectPayload';
  exampleObject?: Maybe<Array<Maybe<ExampleObject>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteExampleObjectPayloadExampleObjectArgs = {
  filter?: InputMaybe<ExampleObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ExampleObjectOrder>;
};

export type DeleteFlattenedSiteArrayPayload = {
  __typename?: 'DeleteFlattenedSiteArrayPayload';
  flattenedSiteArray?: Maybe<Array<Maybe<FlattenedSiteArray>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteFlattenedSiteArrayPayloadFlattenedSiteArrayArgs = {
  filter?: InputMaybe<FlattenedSiteArrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteGerminationTrayPayload = {
  __typename?: 'DeleteGerminationTrayPayload';
  germinationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteGerminationTrayPayloadGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteGrowPlatePayload = {
  __typename?: 'DeleteGrowPlatePayload';
  growPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteGrowPlatePayloadGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GrowPlateOrder>;
};

export type DeleteIpAddrPayload = {
  __typename?: 'DeleteIpAddrPayload';
  ipAddr?: Maybe<Array<Maybe<IpAddr>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteIpAddrPayloadIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<IpAddrOrder>;
};

export type DeleteJonsObjectPayload = {
  __typename?: 'DeleteJonsObjectPayload';
  jonsObject?: Maybe<Array<Maybe<JonsObject>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteJonsObjectPayloadJonsObjectArgs = {
  filter?: InputMaybe<JonsObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JonsObjectOrder>;
};

export type DeleteLocationPayload = {
  __typename?: 'DeleteLocationPayload';
  location?: Maybe<Array<Maybe<Location>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteLocationPayloadLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LocationOrder>;
};

export type DeleteModuleMapPayload = {
  __typename?: 'DeleteModuleMapPayload';
  moduleMap?: Maybe<Array<Maybe<ModuleMap>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteModuleMapPayloadModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteModulePayload = {
  __typename?: 'DeleteModulePayload';
  module?: Maybe<Array<Maybe<Module>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteModulePayloadModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteNurseryPayload = {
  __typename?: 'DeleteNurseryPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  nursery?: Maybe<Array<Maybe<Nursery>>>;
};


export type DeleteNurseryPayloadNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeletePhysicalSolenoidPayload = {
  __typename?: 'DeletePhysicalSolenoidPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  physicalSolenoid?: Maybe<Array<Maybe<PhysicalSolenoid>>>;
};


export type DeletePhysicalSolenoidPayloadPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
};

export type DeletePlantPayload = {
  __typename?: 'DeletePlantPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  plant?: Maybe<Array<Maybe<Plant>>>;
};


export type DeletePlantPayloadPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlantOrder>;
};

export type DeletePortPayload = {
  __typename?: 'DeletePortPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type DeletePortPayloadPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PortOrder>;
};

export type DeleteSeedPayload = {
  __typename?: 'DeleteSeedPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  seed?: Maybe<Array<Maybe<Seed>>>;
};


export type DeleteSeedPayloadSeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SeedOrder>;
};

export type DeleteShelfPayload = {
  __typename?: 'DeleteShelfPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  shelf?: Maybe<Array<Maybe<Shelf>>>;
};


export type DeleteShelfPayloadShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ShelfOrder>;
};

export type DeleteSignalPayload = {
  __typename?: 'DeleteSignalPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  signal?: Maybe<Array<Maybe<Signal>>>;
};


export type DeleteSignalPayloadSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SignalOrder>;
};

export type DeleteSignalTablePayload = {
  __typename?: 'DeleteSignalTablePayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  signalTable?: Maybe<Array<Maybe<SignalTable>>>;
};


export type DeleteSignalTablePayloadSignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteSitePayload = {
  __typename?: 'DeleteSitePayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  site?: Maybe<Array<Maybe<Site>>>;
};


export type DeleteSitePayloadSiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SiteOrder>;
};

export type DeleteTimeSeriesPayload = {
  __typename?: 'DeleteTimeSeriesPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  timeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
};


export type DeleteTimeSeriesPayloadTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TimeSeriesOrder>;
};

export type DeleteWaterRoutePresetsPayload = {
  __typename?: 'DeleteWaterRoutePresetsPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  waterRoutePresets?: Maybe<Array<Maybe<WaterRoutePresets>>>;
};


export type DeleteWaterRoutePresetsPayloadWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  stock?: Maybe<Scalars['Int']['output']>;
};


export type DrawerCropAssignmentArgs = {
  filter?: InputMaybe<CropFilter>;
};


export type DrawerGridLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
};

export type DrawerAggregateResult = {
  __typename?: 'DrawerAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  stockAvg?: Maybe<Scalars['Float']['output']>;
  stockMax?: Maybe<Scalars['Int']['output']>;
  stockMin?: Maybe<Scalars['Int']['output']>;
  stockSum?: Maybe<Scalars['Int']['output']>;
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
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type DrawerRef = {
  cropAssignment?: InputMaybe<CropRef>;
  gridLocation?: InputMaybe<LocationRef>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type DriveOutputsPreset = {
  __typename?: 'DriveOutputsPreset';
  boolArrayString: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lxEndpoint: Endpoint;
};


export type DriveOutputsPresetLxEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
};

export type DriveOutputsPresetAggregateResult = {
  __typename?: 'DriveOutputsPresetAggregateResult';
  boolArrayStringMax?: Maybe<Scalars['String']['output']>;
  boolArrayStringMin?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type DriveOutputsPresetFilter = {
  and?: InputMaybe<Array<InputMaybe<DriveOutputsPresetFilter>>>;
  has?: InputMaybe<Array<InputMaybe<DriveOutputsPresetHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  boolArrayString?: InputMaybe<Scalars['String']['input']>;
  lxEndpoint?: InputMaybe<EndpointRef>;
};

export type DriveOutputsPresetRef = {
  boolArrayString?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lxEndpoint?: InputMaybe<EndpointRef>;
};

export type Endpoint = {
  __typename?: 'Endpoint';
  addr: IpAddr;
  id: Scalars['ID']['output'];
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
  count?: Maybe<Scalars['Int']['output']>;
};

export type EndpointFilter = {
  and?: InputMaybe<Array<InputMaybe<EndpointFilter>>>;
  has?: InputMaybe<Array<InputMaybe<EndpointHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  port?: InputMaybe<PortRef>;
};

export type ExampleObject = {
  __typename?: 'ExampleObject';
  id: Scalars['ID']['output'];
  someData: Scalars['String']['output'];
  someTime: Scalars['DateTime']['output'];
};

export type ExampleObjectAggregateResult = {
  __typename?: 'ExampleObjectAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  someDataMax?: Maybe<Scalars['String']['output']>;
  someDataMin?: Maybe<Scalars['String']['output']>;
  someTimeMax?: Maybe<Scalars['DateTime']['output']>;
  someTimeMin?: Maybe<Scalars['DateTime']['output']>;
};

export type ExampleObjectFilter = {
  and?: InputMaybe<Array<InputMaybe<ExampleObjectFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ExampleObjectHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<ExampleObjectFilter>;
  or?: InputMaybe<Array<InputMaybe<ExampleObjectFilter>>>;
};

export enum ExampleObjectHasFilter {
  SomeData = 'someData',
  SomeTime = 'someTime'
}

export type ExampleObjectOrder = {
  asc?: InputMaybe<ExampleObjectOrderable>;
  desc?: InputMaybe<ExampleObjectOrderable>;
  then?: InputMaybe<ExampleObjectOrder>;
};

export enum ExampleObjectOrderable {
  SomeData = 'someData',
  SomeTime = 'someTime'
}

export type ExampleObjectPatch = {
  someData?: InputMaybe<Scalars['String']['input']>;
  someTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExampleObjectRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  someData?: InputMaybe<Scalars['String']['input']>;
  someTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FlattenedSiteArray = {
  __typename?: 'FlattenedSiteArray';
  id: Scalars['ID']['output'];
  sites: Array<Site>;
  sitesAggregate?: Maybe<SiteAggregateResult>;
};


export type FlattenedSiteArraySitesArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SiteOrder>;
};


export type FlattenedSiteArraySitesAggregateArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type FlattenedSiteArrayAggregateResult = {
  __typename?: 'FlattenedSiteArrayAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type FlattenedSiteArrayFilter = {
  and?: InputMaybe<Array<InputMaybe<FlattenedSiteArrayFilter>>>;
  has?: InputMaybe<Array<InputMaybe<FlattenedSiteArrayHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<FlattenedSiteArrayFilter>;
  or?: InputMaybe<Array<InputMaybe<FlattenedSiteArrayFilter>>>;
};

export enum FlattenedSiteArrayHasFilter {
  Sites = 'sites'
}

export type FlattenedSiteArrayPatch = {
  sites?: InputMaybe<Array<SiteRef>>;
};

export type FlattenedSiteArrayRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sites?: InputMaybe<Array<SiteRef>>;
};

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatRange = {
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']['input']>;
  get?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  query?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GerminationTray = {
  __typename?: 'GerminationTray';
  id: Scalars['ID']['output'];
  sites: Array<Site>;
  sitesAggregate?: Maybe<SiteAggregateResult>;
};


export type GerminationTraySitesArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SiteOrder>;
};


export type GerminationTraySitesAggregateArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type GerminationTrayAggregateResult = {
  __typename?: 'GerminationTrayAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type GerminationTrayFilter = {
  and?: InputMaybe<Array<InputMaybe<GerminationTrayFilter>>>;
  has?: InputMaybe<Array<InputMaybe<GerminationTrayHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  sites?: InputMaybe<Array<SiteRef>>;
};

export type GrowPlate = {
  __typename?: 'GrowPlate';
  rawNetCupReading?: Maybe<Scalars['Int']['output']>;
};

export type GrowPlateAggregateResult = {
  __typename?: 'GrowPlateAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  rawNetCupReadingAvg?: Maybe<Scalars['Float']['output']>;
  rawNetCupReadingMax?: Maybe<Scalars['Int']['output']>;
  rawNetCupReadingMin?: Maybe<Scalars['Int']['output']>;
  rawNetCupReadingSum?: Maybe<Scalars['Int']['output']>;
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
  rawNetCupReading?: InputMaybe<Scalars['Int']['input']>;
};

export type GrowPlateRef = {
  rawNetCupReading?: InputMaybe<Scalars['Int']['input']>;
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
  eq?: InputMaybe<Scalars['Int64']['input']>;
  ge?: InputMaybe<Scalars['Int64']['input']>;
  gt?: InputMaybe<Scalars['Int64']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']['input']>>>;
  le?: InputMaybe<Scalars['Int64']['input']>;
  lt?: InputMaybe<Scalars['Int64']['input']>;
};

export type Int64Range = {
  max: Scalars['Int64']['input'];
  min: Scalars['Int64']['input'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
};

export type IntRange = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type IpAddr = {
  __typename?: 'IpAddr';
  addr: Scalars['String']['output'];
};

export type IpAddrAggregateResult = {
  __typename?: 'IpAddrAggregateResult';
  addrMax?: Maybe<Scalars['String']['output']>;
  addrMin?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
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
  addr?: InputMaybe<Scalars['String']['input']>;
};

export type IpAddrRef = {
  addr?: InputMaybe<Scalars['String']['input']>;
};

export type JonsObject = {
  __typename?: 'JonsObject';
  id: Scalars['ID']['output'];
  someData: Scalars['String']['output'];
  someTime: Scalars['DateTime']['output'];
};

export type JonsObjectAggregateResult = {
  __typename?: 'JonsObjectAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  someDataMax?: Maybe<Scalars['String']['output']>;
  someDataMin?: Maybe<Scalars['String']['output']>;
  someTimeMax?: Maybe<Scalars['DateTime']['output']>;
  someTimeMin?: Maybe<Scalars['DateTime']['output']>;
};

export type JonsObjectFilter = {
  and?: InputMaybe<Array<InputMaybe<JonsObjectFilter>>>;
  has?: InputMaybe<Array<InputMaybe<JonsObjectHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<JonsObjectFilter>;
  or?: InputMaybe<Array<InputMaybe<JonsObjectFilter>>>;
  someTime?: InputMaybe<DateTimeFilter>;
};

export enum JonsObjectHasFilter {
  SomeData = 'someData',
  SomeTime = 'someTime'
}

export type JonsObjectOrder = {
  asc?: InputMaybe<JonsObjectOrderable>;
  desc?: InputMaybe<JonsObjectOrderable>;
  then?: InputMaybe<JonsObjectOrder>;
};

export enum JonsObjectOrderable {
  SomeData = 'someData',
  SomeTime = 'someTime'
}

export type JonsObjectPatch = {
  someData?: InputMaybe<Scalars['String']['input']>;
  someTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type JonsObjectRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  someData?: InputMaybe<Scalars['String']['input']>;
  someTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Location = {
  __typename?: 'Location';
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export type LocationAggregateResult = {
  __typename?: 'LocationAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  xAvg?: Maybe<Scalars['Float']['output']>;
  xMax?: Maybe<Scalars['Int']['output']>;
  xMin?: Maybe<Scalars['Int']['output']>;
  xSum?: Maybe<Scalars['Int']['output']>;
  yAvg?: Maybe<Scalars['Float']['output']>;
  yMax?: Maybe<Scalars['Int']['output']>;
  yMin?: Maybe<Scalars['Int']['output']>;
  ySum?: Maybe<Scalars['Int']['output']>;
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
  x?: InputMaybe<Scalars['Int']['input']>;
  y?: InputMaybe<Scalars['Int']['input']>;
};

export type LocationRef = {
  x?: InputMaybe<Scalars['Int']['input']>;
  y?: InputMaybe<Scalars['Int']['input']>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type Module = {
  __typename?: 'Module';
  id: Scalars['ID']['output'];
  instantiationTemplateUsed: ModuleType;
  nutrientMix?: Maybe<NutrientMix>;
  shelves?: Maybe<Array<Maybe<Shelf>>>;
  shelvesAggregate?: Maybe<ShelfAggregateResult>;
};


export type ModuleShelvesArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ShelfOrder>;
};


export type ModuleShelvesAggregateArgs = {
  filter?: InputMaybe<ShelfFilter>;
};

export type ModuleAggregateResult = {
  __typename?: 'ModuleAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type ModuleFilter = {
  and?: InputMaybe<Array<InputMaybe<ModuleFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ModuleHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  id: Scalars['ID']['output'];
  modules?: Maybe<Array<Maybe<Module>>>;
  modulesAggregate?: Maybe<ModuleAggregateResult>;
};


export type ModuleMapModulesArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ModuleMapModulesAggregateArgs = {
  filter?: InputMaybe<ModuleFilter>;
};

export type ModuleMapAggregateResult = {
  __typename?: 'ModuleMapAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type ModuleMapFilter = {
  and?: InputMaybe<Array<InputMaybe<ModuleMapFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ModuleMapHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  modules?: InputMaybe<Array<InputMaybe<ModuleRef>>>;
};

export type ModulePatch = {
  instantiationTemplateUsed?: InputMaybe<ModuleType>;
  nutrientMix?: InputMaybe<NutrientMix>;
  shelves?: InputMaybe<Array<InputMaybe<ShelfRef>>>;
};

export type ModuleRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
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
  addAutomationClock?: Maybe<AddAutomationClockPayload>;
  addChosenDriveOutputPreset?: Maybe<AddChosenDriveOutputPresetPayload>;
  addClockNodePoint?: Maybe<AddClockNodePointPayload>;
  addCrop?: Maybe<AddCropPayload>;
  addCropIntention?: Maybe<AddCropIntentionPayload>;
  addCropIntentionsList?: Maybe<AddCropIntentionsListPayload>;
  addDrawer?: Maybe<AddDrawerPayload>;
  addDriveOutputsPreset?: Maybe<AddDriveOutputsPresetPayload>;
  addEndpoint?: Maybe<AddEndpointPayload>;
  addExampleObject?: Maybe<AddExampleObjectPayload>;
  addFlattenedSiteArray?: Maybe<AddFlattenedSiteArrayPayload>;
  addGerminationTray?: Maybe<AddGerminationTrayPayload>;
  addGrowPlate?: Maybe<AddGrowPlatePayload>;
  addIpAddr?: Maybe<AddIpAddrPayload>;
  addJonsObject?: Maybe<AddJonsObjectPayload>;
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
  deleteAutomationClock?: Maybe<DeleteAutomationClockPayload>;
  deleteChosenDriveOutputPreset?: Maybe<DeleteChosenDriveOutputPresetPayload>;
  deleteClockNodePoint?: Maybe<DeleteClockNodePointPayload>;
  deleteCrop?: Maybe<DeleteCropPayload>;
  deleteCropIntention?: Maybe<DeleteCropIntentionPayload>;
  deleteCropIntentionsList?: Maybe<DeleteCropIntentionsListPayload>;
  deleteDrawer?: Maybe<DeleteDrawerPayload>;
  deleteDriveOutputsPreset?: Maybe<DeleteDriveOutputsPresetPayload>;
  deleteEndpoint?: Maybe<DeleteEndpointPayload>;
  deleteExampleObject?: Maybe<DeleteExampleObjectPayload>;
  deleteFlattenedSiteArray?: Maybe<DeleteFlattenedSiteArrayPayload>;
  deleteGerminationTray?: Maybe<DeleteGerminationTrayPayload>;
  deleteGrowPlate?: Maybe<DeleteGrowPlatePayload>;
  deleteIpAddr?: Maybe<DeleteIpAddrPayload>;
  deleteJonsObject?: Maybe<DeleteJonsObjectPayload>;
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
  updateAutomationClock?: Maybe<UpdateAutomationClockPayload>;
  updateChosenDriveOutputPreset?: Maybe<UpdateChosenDriveOutputPresetPayload>;
  updateClockNodePoint?: Maybe<UpdateClockNodePointPayload>;
  updateCrop?: Maybe<UpdateCropPayload>;
  updateCropIntention?: Maybe<UpdateCropIntentionPayload>;
  updateCropIntentionsList?: Maybe<UpdateCropIntentionsListPayload>;
  updateDrawer?: Maybe<UpdateDrawerPayload>;
  updateDriveOutputsPreset?: Maybe<UpdateDriveOutputsPresetPayload>;
  updateEndpoint?: Maybe<UpdateEndpointPayload>;
  updateExampleObject?: Maybe<UpdateExampleObjectPayload>;
  updateFlattenedSiteArray?: Maybe<UpdateFlattenedSiteArrayPayload>;
  updateGerminationTray?: Maybe<UpdateGerminationTrayPayload>;
  updateGrowPlate?: Maybe<UpdateGrowPlatePayload>;
  updateIpAddr?: Maybe<UpdateIpAddrPayload>;
  updateJonsObject?: Maybe<UpdateJonsObjectPayload>;
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


export type MutationAddAutomationClockArgs = {
  input: Array<AddAutomationClockInput>;
};


export type MutationAddChosenDriveOutputPresetArgs = {
  input: Array<AddChosenDriveOutputPresetInput>;
};


export type MutationAddClockNodePointArgs = {
  input: Array<AddClockNodePointInput>;
  upsert?: InputMaybe<Scalars['Boolean']['input']>;
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


export type MutationAddExampleObjectArgs = {
  input: Array<AddExampleObjectInput>;
};


export type MutationAddFlattenedSiteArrayArgs = {
  input: Array<AddFlattenedSiteArrayInput>;
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


export type MutationAddJonsObjectArgs = {
  input: Array<AddJonsObjectInput>;
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


export type MutationDeleteAutomationClockArgs = {
  filter: AutomationClockFilter;
};


export type MutationDeleteChosenDriveOutputPresetArgs = {
  filter: ChosenDriveOutputPresetFilter;
};


export type MutationDeleteClockNodePointArgs = {
  filter: ClockNodePointFilter;
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


export type MutationDeleteExampleObjectArgs = {
  filter: ExampleObjectFilter;
};


export type MutationDeleteFlattenedSiteArrayArgs = {
  filter: FlattenedSiteArrayFilter;
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


export type MutationDeleteJonsObjectArgs = {
  filter: JonsObjectFilter;
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


export type MutationUpdateAutomationClockArgs = {
  input: UpdateAutomationClockInput;
};


export type MutationUpdateChosenDriveOutputPresetArgs = {
  input: UpdateChosenDriveOutputPresetInput;
};


export type MutationUpdateClockNodePointArgs = {
  input: UpdateClockNodePointInput;
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


export type MutationUpdateExampleObjectArgs = {
  input: UpdateExampleObjectInput;
};


export type MutationUpdateFlattenedSiteArrayArgs = {
  input: UpdateFlattenedSiteArrayInput;
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


export type MutationUpdateJonsObjectArgs = {
  input: UpdateJonsObjectInput;
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
  distance: Scalars['Float']['input'];
};

export type Nursery = {
  __typename?: 'Nursery';
  GerminationTrays: Array<GerminationTray>;
  GerminationTraysAggregate?: Maybe<GerminationTrayAggregateResult>;
  id: Scalars['ID']['output'];
};


export type NurseryGerminationTraysArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type NurseryGerminationTraysAggregateArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
};

export type NurseryAggregateResult = {
  __typename?: 'NurseryAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type NurseryFilter = {
  and?: InputMaybe<Array<InputMaybe<NurseryFilter>>>;
  has?: InputMaybe<Array<InputMaybe<NurseryHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum NutrientMix {
  A = 'A',
  B = 'B'
}

export type PhysicalSolenoid = {
  __typename?: 'PhysicalSolenoid';
  driveState: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  influxOutputCurrentTimeSeries?: Maybe<TimeSeries>;
  outputDriveAddr: IpAddr;
  outputDriveIndex: Scalars['Int']['output'];
};


export type PhysicalSolenoidInfluxOutputCurrentTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
};


export type PhysicalSolenoidOutputDriveAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
};

export type PhysicalSolenoidAggregateResult = {
  __typename?: 'PhysicalSolenoidAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  outputDriveIndexAvg?: Maybe<Scalars['Float']['output']>;
  outputDriveIndexMax?: Maybe<Scalars['Int']['output']>;
  outputDriveIndexMin?: Maybe<Scalars['Int']['output']>;
  outputDriveIndexSum?: Maybe<Scalars['Int']['output']>;
};

export type PhysicalSolenoidFilter = {
  and?: InputMaybe<Array<InputMaybe<PhysicalSolenoidFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PhysicalSolenoidHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  driveState?: InputMaybe<Scalars['Boolean']['input']>;
  influxOutputCurrentTimeSeries?: InputMaybe<TimeSeriesRef>;
  outputDriveAddr?: InputMaybe<IpAddrRef>;
  outputDriveIndex?: InputMaybe<Scalars['Int']['input']>;
};

export type PhysicalSolenoidRef = {
  driveState?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  influxOutputCurrentTimeSeries?: InputMaybe<TimeSeriesRef>;
  outputDriveAddr?: InputMaybe<IpAddrRef>;
  outputDriveIndex?: InputMaybe<Scalars['Int']['input']>;
};

export type Plant = {
  __typename?: 'Plant';
  cropName: Scalars['String']['output'];
  germinatedDate?: Maybe<Scalars['DateTime']['output']>;
  harvestedDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Site>;
  nutrientType: Scalars['String']['output'];
  repeater: Scalars['Boolean']['output'];
  transferredDate?: Maybe<Scalars['DateTime']['output']>;
};


export type PlantLocationArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type PlantAggregateResult = {
  __typename?: 'PlantAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  cropNameMax?: Maybe<Scalars['String']['output']>;
  cropNameMin?: Maybe<Scalars['String']['output']>;
  germinatedDateMax?: Maybe<Scalars['DateTime']['output']>;
  germinatedDateMin?: Maybe<Scalars['DateTime']['output']>;
  harvestedDateMax?: Maybe<Scalars['DateTime']['output']>;
  harvestedDateMin?: Maybe<Scalars['DateTime']['output']>;
  nutrientTypeMax?: Maybe<Scalars['String']['output']>;
  nutrientTypeMin?: Maybe<Scalars['String']['output']>;
  transferredDateMax?: Maybe<Scalars['DateTime']['output']>;
  transferredDateMin?: Maybe<Scalars['DateTime']['output']>;
};

export type PlantFilter = {
  and?: InputMaybe<Array<InputMaybe<PlantFilter>>>;
  cropName?: InputMaybe<StringTermFilter>;
  has?: InputMaybe<Array<InputMaybe<PlantHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<PlantFilter>;
  nutrientType?: InputMaybe<StringTermFilter>;
  or?: InputMaybe<Array<InputMaybe<PlantFilter>>>;
  repeater?: InputMaybe<Scalars['Boolean']['input']>;
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
  cropName?: InputMaybe<Scalars['String']['input']>;
  germinatedDate?: InputMaybe<Scalars['DateTime']['input']>;
  harvestedDate?: InputMaybe<Scalars['DateTime']['input']>;
  location?: InputMaybe<SiteRef>;
  nutrientType?: InputMaybe<Scalars['String']['input']>;
  repeater?: InputMaybe<Scalars['Boolean']['input']>;
  transferredDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlantRef = {
  cropName?: InputMaybe<Scalars['String']['input']>;
  germinatedDate?: InputMaybe<Scalars['DateTime']['input']>;
  harvestedDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<SiteRef>;
  nutrientType?: InputMaybe<Scalars['String']['input']>;
  repeater?: InputMaybe<Scalars['Boolean']['input']>;
  transferredDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
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
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
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
  port: Scalars['Int']['output'];
};

export type PortAggregateResult = {
  __typename?: 'PortAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  portAvg?: Maybe<Scalars['Float']['output']>;
  portMax?: Maybe<Scalars['Int']['output']>;
  portMin?: Maybe<Scalars['Int']['output']>;
  portSum?: Maybe<Scalars['Int']['output']>;
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
  port?: InputMaybe<Scalars['Int']['input']>;
};

export type PortRef = {
  port?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAutomationClock?: Maybe<AutomationClockAggregateResult>;
  aggregateChosenDriveOutputPreset?: Maybe<ChosenDriveOutputPresetAggregateResult>;
  aggregateClockNodePoint?: Maybe<ClockNodePointAggregateResult>;
  aggregateCrop?: Maybe<CropAggregateResult>;
  aggregateCropIntention?: Maybe<CropIntentionAggregateResult>;
  aggregateCropIntentionsList?: Maybe<CropIntentionsListAggregateResult>;
  aggregateDrawer?: Maybe<DrawerAggregateResult>;
  aggregateDriveOutputsPreset?: Maybe<DriveOutputsPresetAggregateResult>;
  aggregateEndpoint?: Maybe<EndpointAggregateResult>;
  aggregateExampleObject?: Maybe<ExampleObjectAggregateResult>;
  aggregateFlattenedSiteArray?: Maybe<FlattenedSiteArrayAggregateResult>;
  aggregateGerminationTray?: Maybe<GerminationTrayAggregateResult>;
  aggregateGrowPlate?: Maybe<GrowPlateAggregateResult>;
  aggregateIpAddr?: Maybe<IpAddrAggregateResult>;
  aggregateJonsObject?: Maybe<JonsObjectAggregateResult>;
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
  getAutomationClock?: Maybe<AutomationClock>;
  getChosenDriveOutputPreset?: Maybe<ChosenDriveOutputPreset>;
  getClockNodePoint?: Maybe<ClockNodePoint>;
  getCrop?: Maybe<Crop>;
  getDriveOutputsPreset?: Maybe<DriveOutputsPreset>;
  getEndpoint?: Maybe<Endpoint>;
  getExampleObject?: Maybe<ExampleObject>;
  getFlattenedSiteArray?: Maybe<FlattenedSiteArray>;
  getGerminationTray?: Maybe<GerminationTray>;
  getJonsObject?: Maybe<JonsObject>;
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
  queryAutomationClock?: Maybe<Array<Maybe<AutomationClock>>>;
  queryChosenDriveOutputPreset?: Maybe<Array<Maybe<ChosenDriveOutputPreset>>>;
  queryClockNodePoint?: Maybe<Array<Maybe<ClockNodePoint>>>;
  queryCrop?: Maybe<Array<Maybe<Crop>>>;
  queryCropIntention?: Maybe<Array<Maybe<CropIntention>>>;
  queryCropIntentionsList?: Maybe<Array<Maybe<CropIntentionsList>>>;
  queryDrawer?: Maybe<Array<Maybe<Drawer>>>;
  queryDriveOutputsPreset?: Maybe<Array<Maybe<DriveOutputsPreset>>>;
  queryEndpoint?: Maybe<Array<Maybe<Endpoint>>>;
  queryExampleObject?: Maybe<Array<Maybe<ExampleObject>>>;
  queryFlattenedSiteArray?: Maybe<Array<Maybe<FlattenedSiteArray>>>;
  queryGerminationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  queryGrowPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  queryIpAddr?: Maybe<Array<Maybe<IpAddr>>>;
  queryJonsObject?: Maybe<Array<Maybe<JonsObject>>>;
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


export type QueryAggregateAutomationClockArgs = {
  filter?: InputMaybe<AutomationClockFilter>;
};


export type QueryAggregateChosenDriveOutputPresetArgs = {
  filter?: InputMaybe<ChosenDriveOutputPresetFilter>;
};


export type QueryAggregateClockNodePointArgs = {
  filter?: InputMaybe<ClockNodePointFilter>;
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


export type QueryAggregateExampleObjectArgs = {
  filter?: InputMaybe<ExampleObjectFilter>;
};


export type QueryAggregateFlattenedSiteArrayArgs = {
  filter?: InputMaybe<FlattenedSiteArrayFilter>;
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


export type QueryAggregateJonsObjectArgs = {
  filter?: InputMaybe<JonsObjectFilter>;
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


export type QueryGetAutomationClockArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetChosenDriveOutputPresetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetClockNodePointArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  xid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCropArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDriveOutputsPresetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetEndpointArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExampleObjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFlattenedSiteArrayArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetGerminationTrayArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetJonsObjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetModuleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetModuleMapArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetNurseryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPhysicalSolenoidArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPlantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetShelfArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSignalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSignalTableArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSiteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTimeSeriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetWaterRoutePresetsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQueryAutomationClockArgs = {
  filter?: InputMaybe<AutomationClockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryChosenDriveOutputPresetArgs = {
  filter?: InputMaybe<ChosenDriveOutputPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryClockNodePointArgs = {
  filter?: InputMaybe<ClockNodePointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ClockNodePointOrder>;
};


export type QueryQueryCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CropOrder>;
};


export type QueryQueryCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CropIntentionOrder>;
};


export type QueryQueryCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DrawerOrder>;
};


export type QueryQueryDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};


export type QueryQueryEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryExampleObjectArgs = {
  filter?: InputMaybe<ExampleObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ExampleObjectOrder>;
};


export type QueryQueryFlattenedSiteArrayArgs = {
  filter?: InputMaybe<FlattenedSiteArrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<GrowPlateOrder>;
};


export type QueryQueryIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<IpAddrOrder>;
};


export type QueryQueryJonsObjectArgs = {
  filter?: InputMaybe<JonsObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JonsObjectOrder>;
};


export type QueryQueryLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<LocationOrder>;
};


export type QueryQueryModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQueryPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
};


export type QueryQueryPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlantOrder>;
};


export type QueryQueryPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PortOrder>;
};


export type QueryQuerySeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SeedOrder>;
};


export type QueryQueryShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ShelfOrder>;
};


export type QueryQuerySignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SignalOrder>;
};


export type QueryQuerySignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQuerySiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SiteOrder>;
};


export type QueryQueryTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TimeSeriesOrder>;
};


export type QueryQueryWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Seed = {
  __typename?: 'Seed';
  qr: Scalars['String']['output'];
};

export type SeedAggregateResult = {
  __typename?: 'SeedAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  qrMax?: Maybe<Scalars['String']['output']>;
  qrMin?: Maybe<Scalars['String']['output']>;
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
  qr?: InputMaybe<Scalars['String']['input']>;
};

export type SeedRef = {
  qr?: InputMaybe<Scalars['String']['input']>;
};

export type Shelf = {
  __typename?: 'Shelf';
  id: Scalars['ID']['output'];
  parentModule?: Maybe<Module>;
  sites?: Maybe<Array<Maybe<Site>>>;
  sitesAggregate?: Maybe<SiteAggregateResult>;
  verticalClearanceHeightToNextShelf: Scalars['Int']['output'];
};


export type ShelfParentModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
};


export type ShelfSitesArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SiteOrder>;
};


export type ShelfSitesAggregateArgs = {
  filter?: InputMaybe<SiteFilter>;
};

export type ShelfAggregateResult = {
  __typename?: 'ShelfAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  verticalClearanceHeightToNextShelfAvg?: Maybe<Scalars['Float']['output']>;
  verticalClearanceHeightToNextShelfMax?: Maybe<Scalars['Int']['output']>;
  verticalClearanceHeightToNextShelfMin?: Maybe<Scalars['Int']['output']>;
  verticalClearanceHeightToNextShelfSum?: Maybe<Scalars['Int']['output']>;
};

export type ShelfFilter = {
  and?: InputMaybe<Array<InputMaybe<ShelfFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ShelfHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  verticalClearanceHeightToNextShelf?: InputMaybe<Scalars['Int']['input']>;
};

export type ShelfRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  parentModule?: InputMaybe<ModuleRef>;
  sites?: InputMaybe<Array<InputMaybe<SiteRef>>>;
  verticalClearanceHeightToNextShelf?: InputMaybe<Scalars['Int']['input']>;
};

export type Signal = {
  __typename?: 'Signal';
  algoString?: Maybe<Scalars['String']['output']>;
  daysToGerminate?: Maybe<Scalars['Int']['output']>;
  growTime?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  maxHarvTime?: Maybe<Scalars['Int']['output']>;
  moduleType?: Maybe<Scalars['String']['output']>;
  plantId?: Maybe<Scalars['String']['output']>;
  plantName?: Maybe<Scalars['String']['output']>;
  signalDate: Scalars['DateTime']['output'];
  signalType: SignalType;
  targetMessage?: Maybe<Scalars['String']['output']>;
};

export type SignalAggregateResult = {
  __typename?: 'SignalAggregateResult';
  algoStringMax?: Maybe<Scalars['String']['output']>;
  algoStringMin?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  daysToGerminateAvg?: Maybe<Scalars['Float']['output']>;
  daysToGerminateMax?: Maybe<Scalars['Int']['output']>;
  daysToGerminateMin?: Maybe<Scalars['Int']['output']>;
  daysToGerminateSum?: Maybe<Scalars['Int']['output']>;
  growTimeAvg?: Maybe<Scalars['Float']['output']>;
  growTimeMax?: Maybe<Scalars['Int']['output']>;
  growTimeMin?: Maybe<Scalars['Int']['output']>;
  growTimeSum?: Maybe<Scalars['Int']['output']>;
  maxHarvTimeAvg?: Maybe<Scalars['Float']['output']>;
  maxHarvTimeMax?: Maybe<Scalars['Int']['output']>;
  maxHarvTimeMin?: Maybe<Scalars['Int']['output']>;
  maxHarvTimeSum?: Maybe<Scalars['Int']['output']>;
  moduleTypeMax?: Maybe<Scalars['String']['output']>;
  moduleTypeMin?: Maybe<Scalars['String']['output']>;
  plantIdMax?: Maybe<Scalars['String']['output']>;
  plantIdMin?: Maybe<Scalars['String']['output']>;
  plantNameMax?: Maybe<Scalars['String']['output']>;
  plantNameMin?: Maybe<Scalars['String']['output']>;
  signalDateMax?: Maybe<Scalars['DateTime']['output']>;
  signalDateMin?: Maybe<Scalars['DateTime']['output']>;
  targetMessageMax?: Maybe<Scalars['String']['output']>;
  targetMessageMin?: Maybe<Scalars['String']['output']>;
};

export type SignalFilter = {
  and?: InputMaybe<Array<InputMaybe<SignalFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SignalHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  algoString?: InputMaybe<Scalars['String']['input']>;
  daysToGerminate?: InputMaybe<Scalars['Int']['input']>;
  growTime?: InputMaybe<Scalars['Int']['input']>;
  maxHarvTime?: InputMaybe<Scalars['Int']['input']>;
  moduleType?: InputMaybe<Scalars['String']['input']>;
  plantId?: InputMaybe<Scalars['String']['input']>;
  plantName?: InputMaybe<Scalars['String']['input']>;
  signalDate?: InputMaybe<Scalars['DateTime']['input']>;
  signalType?: InputMaybe<SignalType>;
  targetMessage?: InputMaybe<Scalars['String']['input']>;
};

export type SignalRef = {
  algoString?: InputMaybe<Scalars['String']['input']>;
  daysToGerminate?: InputMaybe<Scalars['Int']['input']>;
  growTime?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  maxHarvTime?: InputMaybe<Scalars['Int']['input']>;
  moduleType?: InputMaybe<Scalars['String']['input']>;
  plantId?: InputMaybe<Scalars['String']['input']>;
  plantName?: InputMaybe<Scalars['String']['input']>;
  signalDate?: InputMaybe<Scalars['DateTime']['input']>;
  signalType?: InputMaybe<SignalType>;
  targetMessage?: InputMaybe<Scalars['String']['input']>;
};

export type SignalTable = {
  __typename?: 'SignalTable';
  id: Scalars['ID']['output'];
  signals: Array<Signal>;
  signalsAggregate?: Maybe<SignalAggregateResult>;
};


export type SignalTableSignalsArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SignalOrder>;
};


export type SignalTableSignalsAggregateArgs = {
  filter?: InputMaybe<SignalFilter>;
};

export type SignalTableAggregateResult = {
  __typename?: 'SignalTableAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type SignalTableFilter = {
  and?: InputMaybe<Array<InputMaybe<SignalTableFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SignalTableHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  signals?: InputMaybe<Array<SignalRef>>;
};

export enum SignalType {
  Germinate = 'GERMINATE',
  Harvest = 'HARVEST',
  Transfer = 'TRANSFER'
}

export type Site = {
  __typename?: 'Site';
  id: Scalars['ID']['output'];
  occupant?: Maybe<Plant>;
  signal?: Maybe<Signal>;
  uuid?: Maybe<Scalars['Int']['output']>;
};


export type SiteOccupantArgs = {
  filter?: InputMaybe<PlantFilter>;
};


export type SiteSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
};

export type SiteAggregateResult = {
  __typename?: 'SiteAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  uuidAvg?: Maybe<Scalars['Float']['output']>;
  uuidMax?: Maybe<Scalars['Int']['output']>;
  uuidMin?: Maybe<Scalars['Int']['output']>;
  uuidSum?: Maybe<Scalars['Int']['output']>;
};

export type SiteFilter = {
  and?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SiteHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
  not?: InputMaybe<SiteFilter>;
  or?: InputMaybe<Array<InputMaybe<SiteFilter>>>;
};

export enum SiteHasFilter {
  Occupant = 'occupant',
  Signal = 'signal',
  Uuid = 'uuid'
}

export type SiteOrder = {
  asc?: InputMaybe<SiteOrderable>;
  desc?: InputMaybe<SiteOrderable>;
  then?: InputMaybe<SiteOrder>;
};

export enum SiteOrderable {
  Uuid = 'uuid'
}

export type SitePatch = {
  occupant?: InputMaybe<PlantRef>;
  signal?: InputMaybe<SignalRef>;
  uuid?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteRef = {
  id?: InputMaybe<Scalars['ID']['input']>;
  occupant?: InputMaybe<PlantRef>;
  signal?: InputMaybe<SignalRef>;
  uuid?: InputMaybe<Scalars['Int']['input']>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']['input']>;
  anyoftext?: InputMaybe<Scalars['String']['input']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StringRange = {
  max: Scalars['String']['input'];
  min: Scalars['String']['input'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']['input']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']['input']>;
  anyofterms?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  aggregateChosenDriveOutputPreset?: Maybe<ChosenDriveOutputPresetAggregateResult>;
  getChosenDriveOutputPreset?: Maybe<ChosenDriveOutputPreset>;
  queryChosenDriveOutputPreset?: Maybe<Array<Maybe<ChosenDriveOutputPreset>>>;
};


export type SubscriptionAggregateChosenDriveOutputPresetArgs = {
  filter?: InputMaybe<ChosenDriveOutputPresetFilter>;
};


export type SubscriptionGetChosenDriveOutputPresetArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionQueryChosenDriveOutputPresetArgs = {
  filter?: InputMaybe<ChosenDriveOutputPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TimeSeries = {
  __typename?: 'TimeSeries';
  addrInfluxInstance: IpAddr;
  id: Scalars['ID']['output'];
  portInfluxInstance: Port;
  streamPath: Scalars['String']['output'];
};


export type TimeSeriesAddrInfluxInstanceArgs = {
  filter?: InputMaybe<IpAddrFilter>;
};


export type TimeSeriesPortInfluxInstanceArgs = {
  filter?: InputMaybe<PortFilter>;
};

export type TimeSeriesAggregateResult = {
  __typename?: 'TimeSeriesAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  streamPathMax?: Maybe<Scalars['String']['output']>;
  streamPathMin?: Maybe<Scalars['String']['output']>;
};

export type TimeSeriesFilter = {
  and?: InputMaybe<Array<InputMaybe<TimeSeriesFilter>>>;
  has?: InputMaybe<Array<InputMaybe<TimeSeriesHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  streamPath?: InputMaybe<Scalars['String']['input']>;
};

export type TimeSeriesRef = {
  addrInfluxInstance?: InputMaybe<IpAddrRef>;
  id?: InputMaybe<Scalars['ID']['input']>;
  portInfluxInstance?: InputMaybe<PortRef>;
  streamPath?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAutomationClockInput = {
  filter: AutomationClockFilter;
  remove?: InputMaybe<AutomationClockPatch>;
  set?: InputMaybe<AutomationClockPatch>;
};

export type UpdateAutomationClockPayload = {
  __typename?: 'UpdateAutomationClockPayload';
  automationClock?: Maybe<Array<Maybe<AutomationClock>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateAutomationClockPayloadAutomationClockArgs = {
  filter?: InputMaybe<AutomationClockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateChosenDriveOutputPresetInput = {
  filter: ChosenDriveOutputPresetFilter;
  remove?: InputMaybe<ChosenDriveOutputPresetPatch>;
  set?: InputMaybe<ChosenDriveOutputPresetPatch>;
};

export type UpdateChosenDriveOutputPresetPayload = {
  __typename?: 'UpdateChosenDriveOutputPresetPayload';
  chosenDriveOutputPreset?: Maybe<Array<Maybe<ChosenDriveOutputPreset>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateChosenDriveOutputPresetPayloadChosenDriveOutputPresetArgs = {
  filter?: InputMaybe<ChosenDriveOutputPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateClockNodePointInput = {
  filter: ClockNodePointFilter;
  remove?: InputMaybe<ClockNodePointPatch>;
  set?: InputMaybe<ClockNodePointPatch>;
};

export type UpdateClockNodePointPayload = {
  __typename?: 'UpdateClockNodePointPayload';
  clockNodePoint?: Maybe<Array<Maybe<ClockNodePoint>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateClockNodePointPayloadClockNodePointArgs = {
  filter?: InputMaybe<ClockNodePointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ClockNodePointOrder>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCropIntentionPayloadCropIntentionArgs = {
  filter?: InputMaybe<CropIntentionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCropIntentionsListPayloadCropIntentionsListArgs = {
  filter?: InputMaybe<CropIntentionsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCropPayload = {
  __typename?: 'UpdateCropPayload';
  crop?: Maybe<Array<Maybe<Crop>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCropPayloadCropArgs = {
  filter?: InputMaybe<CropFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateDrawerPayloadDrawerArgs = {
  filter?: InputMaybe<DrawerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateDriveOutputsPresetPayloadDriveOutputsPresetArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateEndpointPayloadEndpointArgs = {
  filter?: InputMaybe<EndpointFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateExampleObjectInput = {
  filter: ExampleObjectFilter;
  remove?: InputMaybe<ExampleObjectPatch>;
  set?: InputMaybe<ExampleObjectPatch>;
};

export type UpdateExampleObjectPayload = {
  __typename?: 'UpdateExampleObjectPayload';
  exampleObject?: Maybe<Array<Maybe<ExampleObject>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateExampleObjectPayloadExampleObjectArgs = {
  filter?: InputMaybe<ExampleObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ExampleObjectOrder>;
};

export type UpdateFlattenedSiteArrayInput = {
  filter: FlattenedSiteArrayFilter;
  remove?: InputMaybe<FlattenedSiteArrayPatch>;
  set?: InputMaybe<FlattenedSiteArrayPatch>;
};

export type UpdateFlattenedSiteArrayPayload = {
  __typename?: 'UpdateFlattenedSiteArrayPayload';
  flattenedSiteArray?: Maybe<Array<Maybe<FlattenedSiteArray>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateFlattenedSiteArrayPayloadFlattenedSiteArrayArgs = {
  filter?: InputMaybe<FlattenedSiteArrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateGerminationTrayInput = {
  filter: GerminationTrayFilter;
  remove?: InputMaybe<GerminationTrayPatch>;
  set?: InputMaybe<GerminationTrayPatch>;
};

export type UpdateGerminationTrayPayload = {
  __typename?: 'UpdateGerminationTrayPayload';
  germinationTray?: Maybe<Array<Maybe<GerminationTray>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateGerminationTrayPayloadGerminationTrayArgs = {
  filter?: InputMaybe<GerminationTrayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateGrowPlateInput = {
  filter: GrowPlateFilter;
  remove?: InputMaybe<GrowPlatePatch>;
  set?: InputMaybe<GrowPlatePatch>;
};

export type UpdateGrowPlatePayload = {
  __typename?: 'UpdateGrowPlatePayload';
  growPlate?: Maybe<Array<Maybe<GrowPlate>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateGrowPlatePayloadGrowPlateArgs = {
  filter?: InputMaybe<GrowPlateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateIpAddrPayloadIpAddrArgs = {
  filter?: InputMaybe<IpAddrFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<IpAddrOrder>;
};

export type UpdateJonsObjectInput = {
  filter: JonsObjectFilter;
  remove?: InputMaybe<JonsObjectPatch>;
  set?: InputMaybe<JonsObjectPatch>;
};

export type UpdateJonsObjectPayload = {
  __typename?: 'UpdateJonsObjectPayload';
  jonsObject?: Maybe<Array<Maybe<JonsObject>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateJonsObjectPayloadJonsObjectArgs = {
  filter?: InputMaybe<JonsObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JonsObjectOrder>;
};

export type UpdateLocationInput = {
  filter: LocationFilter;
  remove?: InputMaybe<LocationPatch>;
  set?: InputMaybe<LocationPatch>;
};

export type UpdateLocationPayload = {
  __typename?: 'UpdateLocationPayload';
  location?: Maybe<Array<Maybe<Location>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateLocationPayloadLocationArgs = {
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateModuleMapPayloadModuleMapArgs = {
  filter?: InputMaybe<ModuleMapFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateModulePayload = {
  __typename?: 'UpdateModulePayload';
  module?: Maybe<Array<Maybe<Module>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateModulePayloadModuleArgs = {
  filter?: InputMaybe<ModuleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateNurseryInput = {
  filter: NurseryFilter;
  remove?: InputMaybe<NurseryPatch>;
  set?: InputMaybe<NurseryPatch>;
};

export type UpdateNurseryPayload = {
  __typename?: 'UpdateNurseryPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  nursery?: Maybe<Array<Maybe<Nursery>>>;
};


export type UpdateNurseryPayloadNurseryArgs = {
  filter?: InputMaybe<NurseryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePhysicalSolenoidInput = {
  filter: PhysicalSolenoidFilter;
  remove?: InputMaybe<PhysicalSolenoidPatch>;
  set?: InputMaybe<PhysicalSolenoidPatch>;
};

export type UpdatePhysicalSolenoidPayload = {
  __typename?: 'UpdatePhysicalSolenoidPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  physicalSolenoid?: Maybe<Array<Maybe<PhysicalSolenoid>>>;
};


export type UpdatePhysicalSolenoidPayloadPhysicalSolenoidArgs = {
  filter?: InputMaybe<PhysicalSolenoidFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PhysicalSolenoidOrder>;
};

export type UpdatePlantInput = {
  filter: PlantFilter;
  remove?: InputMaybe<PlantPatch>;
  set?: InputMaybe<PlantPatch>;
};

export type UpdatePlantPayload = {
  __typename?: 'UpdatePlantPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  plant?: Maybe<Array<Maybe<Plant>>>;
};


export type UpdatePlantPayloadPlantArgs = {
  filter?: InputMaybe<PlantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PlantOrder>;
};

export type UpdatePortInput = {
  filter: PortFilter;
  remove?: InputMaybe<PortPatch>;
  set?: InputMaybe<PortPatch>;
};

export type UpdatePortPayload = {
  __typename?: 'UpdatePortPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  port?: Maybe<Array<Maybe<Port>>>;
};


export type UpdatePortPayloadPortArgs = {
  filter?: InputMaybe<PortFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PortOrder>;
};

export type UpdateSeedInput = {
  filter: SeedFilter;
  remove?: InputMaybe<SeedPatch>;
  set?: InputMaybe<SeedPatch>;
};

export type UpdateSeedPayload = {
  __typename?: 'UpdateSeedPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  seed?: Maybe<Array<Maybe<Seed>>>;
};


export type UpdateSeedPayloadSeedArgs = {
  filter?: InputMaybe<SeedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SeedOrder>;
};

export type UpdateShelfInput = {
  filter: ShelfFilter;
  remove?: InputMaybe<ShelfPatch>;
  set?: InputMaybe<ShelfPatch>;
};

export type UpdateShelfPayload = {
  __typename?: 'UpdateShelfPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  shelf?: Maybe<Array<Maybe<Shelf>>>;
};


export type UpdateShelfPayloadShelfArgs = {
  filter?: InputMaybe<ShelfFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ShelfOrder>;
};

export type UpdateSignalInput = {
  filter: SignalFilter;
  remove?: InputMaybe<SignalPatch>;
  set?: InputMaybe<SignalPatch>;
};

export type UpdateSignalPayload = {
  __typename?: 'UpdateSignalPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  signal?: Maybe<Array<Maybe<Signal>>>;
};


export type UpdateSignalPayloadSignalArgs = {
  filter?: InputMaybe<SignalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SignalOrder>;
};

export type UpdateSignalTableInput = {
  filter: SignalTableFilter;
  remove?: InputMaybe<SignalTablePatch>;
  set?: InputMaybe<SignalTablePatch>;
};

export type UpdateSignalTablePayload = {
  __typename?: 'UpdateSignalTablePayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  signalTable?: Maybe<Array<Maybe<SignalTable>>>;
};


export type UpdateSignalTablePayloadSignalTableArgs = {
  filter?: InputMaybe<SignalTableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSiteInput = {
  filter: SiteFilter;
  remove?: InputMaybe<SitePatch>;
  set?: InputMaybe<SitePatch>;
};

export type UpdateSitePayload = {
  __typename?: 'UpdateSitePayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  site?: Maybe<Array<Maybe<Site>>>;
};


export type UpdateSitePayloadSiteArgs = {
  filter?: InputMaybe<SiteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SiteOrder>;
};

export type UpdateTimeSeriesInput = {
  filter: TimeSeriesFilter;
  remove?: InputMaybe<TimeSeriesPatch>;
  set?: InputMaybe<TimeSeriesPatch>;
};

export type UpdateTimeSeriesPayload = {
  __typename?: 'UpdateTimeSeriesPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  timeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
};


export type UpdateTimeSeriesPayloadTimeSeriesArgs = {
  filter?: InputMaybe<TimeSeriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TimeSeriesOrder>;
};

export type UpdateWaterRoutePresetsInput = {
  filter: WaterRoutePresetsFilter;
  remove?: InputMaybe<WaterRoutePresetsPatch>;
  set?: InputMaybe<WaterRoutePresetsPatch>;
};

export type UpdateWaterRoutePresetsPayload = {
  __typename?: 'UpdateWaterRoutePresetsPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  waterRoutePresets?: Maybe<Array<Maybe<WaterRoutePresets>>>;
};


export type UpdateWaterRoutePresetsPayloadWaterRoutePresetsArgs = {
  filter?: InputMaybe<WaterRoutePresetsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type WaterRoutePresets = {
  __typename?: 'WaterRoutePresets';
  id: Scalars['ID']['output'];
  presets: Array<DriveOutputsPreset>;
  presetsAggregate?: Maybe<DriveOutputsPresetAggregateResult>;
};


export type WaterRoutePresetsPresetsArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<DriveOutputsPresetOrder>;
};


export type WaterRoutePresetsPresetsAggregateArgs = {
  filter?: InputMaybe<DriveOutputsPresetFilter>;
};

export type WaterRoutePresetsAggregateResult = {
  __typename?: 'WaterRoutePresetsAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
};

export type WaterRoutePresetsFilter = {
  and?: InputMaybe<Array<InputMaybe<WaterRoutePresetsFilter>>>;
  has?: InputMaybe<Array<InputMaybe<WaterRoutePresetsHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  presets?: InputMaybe<Array<DriveOutputsPresetRef>>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type TwoNums = {
  one: Scalars['Int']['input'];
  two: Scalars['Int']['input'];
};

export type CreateExampleObjMutationVariables = Exact<{
  inputTime: Scalars['DateTime']['input'];
}>;


export type CreateExampleObjMutation = { __typename?: 'Mutation', addExampleObject?: { __typename?: 'AddExampleObjectPayload', exampleObject?: Array<{ __typename?: 'ExampleObject', id: string, someData: string, someTime: any } | null> | null } | null };

export type CreateJonsObjMutationVariables = Exact<{
  jonStringData: Scalars['String']['input'];
  someTime: Scalars['DateTime']['input'];
}>;


export type CreateJonsObjMutation = { __typename?: 'Mutation', addJonsObject?: { __typename?: 'AddJonsObjectPayload', numUids?: number | null, jonsObject?: Array<{ __typename?: 'JonsObject', id: string, someData: string, someTime: any } | null> | null } | null };

export type GetDriveOutputStringQueryVariables = Exact<{
  driveOutputsID: Scalars['ID']['input'];
}>;


export type GetDriveOutputStringQuery = { __typename?: 'Query', getDriveOutputsPreset?: { __typename?: 'DriveOutputsPreset', id: string, boolArrayString: string, lxEndpoint: { __typename?: 'Endpoint', addr: { __typename?: 'IpAddr', addr: string }, port: { __typename?: 'Port', port: number } } } | null };

export type WheresChuckQueryVariables = Exact<{ [key: string]: never; }>;


export type WheresChuckQuery = { __typename?: 'Query', querySite?: Array<{ __typename?: 'Site', id: string } | null> | null };

export type GetClockPoint_FifteenSecondRangeQueryVariables = Exact<{
  min: Scalars['DateTime']['input'];
  max: Scalars['DateTime']['input'];
}>;


export type GetClockPoint_FifteenSecondRangeQuery = { __typename?: 'Query', queryClockNodePoint?: Array<{ __typename?: 'ClockNodePoint', id: string, xid: number, timeOfDay: any, outputState: number } | null> | null };

export type GetFlattenedSiteArrayQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetFlattenedSiteArrayQuery = { __typename?: 'Query', getFlattenedSiteArray?: { __typename?: 'FlattenedSiteArray', id: string, sites: Array<{ __typename?: 'Site', id: string, uuid?: number | null, signal?: { __typename?: 'Signal', id: string, signalDate: any, signalType: SignalType } | null }> } | null };

export type CreateClockMutationMutationVariables = Exact<{
  pointsList: Array<ClockNodePointRef> | ClockNodePointRef;
}>;


export type CreateClockMutationMutation = { __typename?: 'Mutation', addAutomationClock?: { __typename?: 'AddAutomationClockPayload', numUids?: number | null, automationClock?: Array<{ __typename?: 'AutomationClock', id: string, clockNodes: Array<{ __typename?: 'ClockNodePoint', xid: number, outputState: number }> } | null> | null } | null };

export type InstallTwoModulesMutationVariables = Exact<{
  moduleInput: Scalars['String']['input'];
}>;


export type InstallTwoModulesMutation = { __typename?: 'Mutation', addModuleMap?: { __typename?: 'AddModuleMapPayload', moduleMap?: Array<{ __typename?: 'ModuleMap', modules?: Array<{ __typename?: 'Module', id: string, shelves?: Array<{ __typename?: 'Shelf', id: string, sites?: Array<{ __typename?: 'Site', id: string, occupant?: { __typename?: 'Plant', id: string, cropName: string, germinatedDate?: any | null } | null } | null> | null } | null> | null } | null> | null } | null> | null } | null };

export type InstantiateCropIntentionsMutationVariables = Exact<{ [key: string]: never; }>;


export type InstantiateCropIntentionsMutation = { __typename?: 'Mutation', addCropIntentionsList?: { __typename?: 'AddCropIntentionsListPayload', numUids?: number | null, cropIntentionsList?: Array<{ __typename?: 'CropIntentionsList', cropIntentions: Array<{ __typename?: 'CropIntention', crop: { __typename?: 'Crop', required_module_type: string, repeater: boolean } }> } | null> | null } | null };

export type CreateGermTrayMutationVariables = Exact<{
  xidInput: Scalars['String']['input'];
  sitesInput: Array<SiteRef> | SiteRef;
}>;


export type CreateGermTrayMutation = { __typename?: 'Mutation', addGerminationTray?: { __typename?: 'AddGerminationTrayPayload', germinationTray?: Array<{ __typename?: 'GerminationTray', id: string, sites: Array<{ __typename?: 'Site', signal?: { __typename?: 'Signal', signalDate: any } | null }> } | null> | null } | null };

export type InstantiateFlattenedSiteArrayMutationVariables = Exact<{
  sites: Array<SiteRef> | SiteRef;
}>;


export type InstantiateFlattenedSiteArrayMutation = { __typename?: 'Mutation', addFlattenedSiteArray?: { __typename?: 'AddFlattenedSiteArrayPayload', flattenedSiteArray?: Array<{ __typename?: 'FlattenedSiteArray', id: string, sites: Array<{ __typename?: 'Site', id: string, signal?: { __typename?: 'Signal', signalType: SignalType, signalDate: any } | null }> } | null> | null } | null };

export type InstantiateNurseryMutationVariables = Exact<{
  germTraysArray: Array<GerminationTrayRef> | GerminationTrayRef;
}>;


export type InstantiateNurseryMutation = { __typename?: 'Mutation', addNursery?: { __typename?: 'AddNurseryPayload', nursery?: Array<{ __typename?: 'Nursery', id: string, GerminationTrays: Array<{ __typename?: 'GerminationTray', sites: Array<{ __typename?: 'Site', signal?: { __typename?: 'Signal', signalType: SignalType } | null }> }> } | null> | null } | null };

export type AddDriveOutputsPresetMutationVariables = Exact<{
  driveOutputSerialString: Scalars['String']['input'];
}>;


export type AddDriveOutputsPresetMutation = { __typename?: 'Mutation', addDriveOutputsPreset?: { __typename?: 'AddDriveOutputsPresetPayload', driveOutputsPreset?: Array<{ __typename?: 'DriveOutputsPreset', id: string, boolArrayString: string, lxEndpoint: { __typename?: 'Endpoint', addr: { __typename?: 'IpAddr', addr: string }, port: { __typename?: 'Port', port: number } } } | null> | null } | null };


export const CreateExampleObjDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateExampleObj"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addExampleObject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"someData"},"value":{"kind":"StringValue","value":"ohai","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"someTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputTime"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exampleObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"someData"}},{"kind":"Field","name":{"kind":"Name","value":"someTime"}}]}}]}}]}}]} as unknown as DocumentNode<CreateExampleObjMutation, CreateExampleObjMutationVariables>;
export const CreateJonsObjDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJonsObj"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jonStringData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"someTime"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addJonsObject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"someData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jonStringData"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"someTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"someTime"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"jonsObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"someData"}},{"kind":"Field","name":{"kind":"Name","value":"someTime"}}]}}]}}]}}]} as unknown as DocumentNode<CreateJonsObjMutation, CreateJonsObjMutationVariables>;
export const GetDriveOutputStringDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDriveOutputString"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"driveOutputsID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDriveOutputsPreset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"driveOutputsID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"boolArrayString"}},{"kind":"Field","name":{"kind":"Name","value":"lxEndpoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"port"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDriveOutputStringQuery, GetDriveOutputStringQueryVariables>;
export const WheresChuckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WheresChuck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"querySite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<WheresChuckQuery, WheresChuckQueryVariables>;
export const GetClockPoint_FifteenSecondRangeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClockPoint_FifteenSecondRange"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"min"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"max"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"queryClockNodePoint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timeOfDay"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"between"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"min"},"value":{"kind":"Variable","name":{"kind":"Name","value":"min"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"max"},"value":{"kind":"Variable","name":{"kind":"Name","value":"max"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"timeOfDay"}},{"kind":"Field","name":{"kind":"Name","value":"outputState"}}]}}]}}]} as unknown as DocumentNode<GetClockPoint_FifteenSecondRangeQuery, GetClockPoint_FifteenSecondRangeQueryVariables>;
export const GetFlattenedSiteArrayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlattenedSiteArray"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFlattenedSiteArray"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"signal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"signalDate"}},{"kind":"Field","name":{"kind":"Name","value":"signalType"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFlattenedSiteArrayQuery, GetFlattenedSiteArrayQueryVariables>;
export const CreateClockMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClockMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pointsList"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClockNodePointRef"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAutomationClock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clockNodes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pointsList"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"automationClock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clockNodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"xid"}},{"kind":"Field","name":{"kind":"Name","value":"outputState"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateClockMutationMutation, CreateClockMutationMutationVariables>;
export const InstallTwoModulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstallTwoModules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"moduleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addModuleMap"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"modules"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"instantiationTemplateUsed"},"value":{"kind":"EnumValue","value":"DWC_12in_NutrientMixA"}},{"kind":"ObjectField","name":{"kind":"Name","value":"shelves"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verticalClearanceHeightToNextShelf"},"value":{"kind":"IntValue","value":"13"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"occupant"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cropName"},"value":{"kind":"StringValue","value":"someCrop","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"repeater"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"nutrientType"},"value":{"kind":"StringValue","value":"0.3:A|0.7:B","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"germinatedDate"},"value":{"kind":"StringValue","value":"2023-05-09T02:45:48Z","block":false}}]}}]}]}}]}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moduleMap"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shelves"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"occupant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cropName"}},{"kind":"Field","name":{"kind":"Name","value":"germinatedDate"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstallTwoModulesMutation, InstallTwoModulesMutationVariables>;
export const InstantiateCropIntentionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstantiateCropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCropIntentionsList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cropIntentions"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"crop"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"arugi","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"required_module_type"},"value":{"kind":"StringValue","value":"nutA","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"repeater"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"days_harvestable"},"value":{"kind":"IntValue","value":"5"}},{"kind":"ObjectField","name":{"kind":"Name","value":"days_from_transfer_to_first_harvest"},"value":{"kind":"IntValue","value":"6"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"harvestPerWeek"},"value":{"kind":"IntValue","value":"3"}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numUids"}},{"kind":"Field","name":{"kind":"Name","value":"cropIntentionsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cropIntentions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crop"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required_module_type"}},{"kind":"Field","name":{"kind":"Name","value":"repeater"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstantiateCropIntentionsMutation, InstantiateCropIntentionsMutationVariables>;
export const CreateGermTrayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGermTray"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"xidInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sitesInput"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteRef"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGerminationTray"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sitesInput"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"germinationTray"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signalDate"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateGermTrayMutation, CreateGermTrayMutationVariables>;
export const InstantiateFlattenedSiteArrayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstantiateFlattenedSiteArray"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sites"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteRef"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFlattenedSiteArray"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sites"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sites"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flattenedSiteArray"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"signal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signalType"}},{"kind":"Field","name":{"kind":"Name","value":"signalDate"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstantiateFlattenedSiteArrayMutation, InstantiateFlattenedSiteArrayMutationVariables>;
export const InstantiateNurseryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InstantiateNursery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"germTraysArray"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GerminationTrayRef"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNursery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GerminationTrays"},"value":{"kind":"Variable","name":{"kind":"Name","value":"germTraysArray"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nursery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"GerminationTrays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signalType"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstantiateNurseryMutation, InstantiateNurseryMutationVariables>;
export const AddDriveOutputsPresetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDriveOutputsPreset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"driveOutputSerialString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDriveOutputsPreset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lxEndpoint"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"addr"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"addr"},"value":{"kind":"StringValue","value":"192.168.1.251","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"port"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"port"},"value":{"kind":"IntValue","value":"3030"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"boolArrayString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"driveOutputSerialString"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"driveOutputsPreset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"boolArrayString"}},{"kind":"Field","name":{"kind":"Name","value":"lxEndpoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"port"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddDriveOutputsPresetMutation, AddDriveOutputsPresetMutationVariables>;