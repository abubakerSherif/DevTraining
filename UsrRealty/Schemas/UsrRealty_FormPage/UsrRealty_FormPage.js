define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "ac8c8d11-7c1f-48b0-81bc-8c57ab27e312",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_push",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_push_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "database-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_d23act5",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_d23act5",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "#ResourceString(NumberInput_euqk8sz_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_7hle5na",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_555nw88",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_555nw88"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionUSD_fojsbzj",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommissionUSD_fojsbzj",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrNumber",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_lx7dofc",
					"labelPosition": "above",
					"control": "$PDS_UsrNumber_lx7dofc",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_n4obpjb",
					"labelPosition": "above",
					"control": "$PDS_UsrType_n4obpjb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_697gljh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_697gljh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ControlAction_39visfv",
				"values": {
					"code": "goToRecordList",
					"type": "crt.ComboboxAction",
					"icon": "combobox-go-to-source",
					"caption": "ComboBox.IsGoToSourceAllowedTooltip",
					"clicked": {
						"request": "crt.OpenLookupSourceRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "controlActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_l8t0lpe",
					"labelPosition": "above",
					"control": "$PDS_UsrOfferType_l8t0lpe",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_hdmyd9l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hdmyd9l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_x5m1wc4",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_i7811t5",
					"labelPosition": "above",
					"control": "$PDS_UsrComment_i7811t5",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_i13k2r1",
					"labelPosition": "above",
					"control": "$PDS_UsrManager_i13k2r1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_p2h8rkh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_p2h8rkh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_v04jj1p",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_v04jj1p_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_kqpuvuf",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_v04jj1p",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_uakz59r",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_kqpuvuf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_4tqeof6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_4tqeof6_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$UsrParentRealty"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_uakz59r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ji2cznu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ji2cznu_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_7ry6yvgDS"
						}
					}
				},
				"parentName": "FlexContainer_uakz59r",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_be27fb7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_be27fb7_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_uakz59r",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_4h99j8d",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_4h99j8d_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_realty_visits_list"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_be27fb7",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_5d15gmk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_5d15gmk_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_be27fb7",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_oir8leq",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_oir8leq_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_7ry6yvg"
					]
				},
				"parentName": "FlexContainer_uakz59r",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_6a3ox0h",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_v04jj1p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_realty_visits_list",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_7ry6yvg",
					"activeRow": "$GridDetail_7ry6yvg_ActiveRow",
					"selectionState": "$GridDetail_7ry6yvg_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_7ry6yvg_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_7ry6yvgDS_Id",
					"columns": [
						{
							"id": "eb5a7976-667d-ad52-ad03-b03d615ffda1",
							"code": "GridDetail_7ry6yvgDS_UsrComment",
							"caption": "#ResourceString(GridDetail_7ry6yvgDS_UsrComment)#",
							"dataValueType": 28,
							"width": 126
						},
						{
							"id": "4186d314-8c3c-b686-efd3-97f6b07f2812",
							"code": "GridDetail_7ry6yvgDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_7ry6yvgDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 120
						},
						{
							"id": "9daac4e7-4082-67e7-9336-83ab15c0155f",
							"code": "GridDetail_7ry6yvgDS_UsrManager",
							"caption": "#ResourceString(GridDetail_7ry6yvgDS_UsrManager)#",
							"dataValueType": 10,
							"width": 116
						},
						{
							"id": "6afe42f4-54ff-b089-56cf-ae867f526dca",
							"code": "GridDetail_7ry6yvgDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_7ry6yvgDS_UsrParentRealty)#",
							"dataValueType": 10
						},
						{
							"id": "ee397481-6828-2d63-5f3f-03c5efb5914f",
							"code": "GridDetail_7ry6yvgDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_7ry6yvgDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "b55e3192-db58-1273-1147-0f6e554f306c",
							"code": "GridDetail_7ry6yvgDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_7ry6yvgDS_UsrVisitDateTime)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_6a3ox0h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7ry6yvg_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_7ry6yvgDS",
							"filters": "$GridDetail_7ry6yvg | crt.ToCollectionFilters : 'GridDetail_7ry6yvg' : $GridDetail_7ry6yvg_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7ry6yvg_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_realty_visits_list",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7ry6yvg_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_7ry6yvgDS",
							"filters": "$GridDetail_7ry6yvg | crt.ToCollectionFilters : 'GridDetail_7ry6yvg' : $GridDetail_7ry6yvg_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7ry6yvg_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_7ry6yvg_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7ry6yvg_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_realty_visits_list",
							"filters": "$GridDetail_7ry6yvg | crt.ToCollectionFilters : 'GridDetail_7ry6yvg' : $GridDetail_7ry6yvg_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7ry6yvg_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_realty_visits_list",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_7ry6yvg_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_7ry6yvgDS",
							"filters": "$GridDetail_7ry6yvg | crt.ToCollectionFilters : 'GridDetail_7ry6yvg' : $GridDetail_7ry6yvg_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_7ry6yvg_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_realty_visits_list",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_d23act5": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_555nw88": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_n4obpjb": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_l8t0lpe": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_i7811t5": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_i13k2r1": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_lx7dofc": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCommissionUSD_fojsbzj": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_7ry6yvg": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_7ry6yvgDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_7ry6yvgDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_7ry6yvgDS.UsrComment"
									}
								},
								"GridDetail_7ry6yvgDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_7ry6yvgDS.CreatedOn"
									}
								},
								"GridDetail_7ry6yvgDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_7ry6yvgDS.UsrManager"
									}
								},
								"GridDetail_7ry6yvgDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_7ry6yvgDS.UsrParentRealty"
									}
								},
								"GridDetail_7ry6yvgDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_7ry6yvgDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_7ry6yvgDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_7ry6yvgDS.UsrVisitDateTime"
									}
								},
								"GridDetail_7ry6yvgDS_Id": {
									"modelConfig": {
										"path": "GridDetail_7ry6yvgDS.Id"
									}
								}
							}
						}
					},
					"UsrParentRealty": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_7ry6yvgDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_7ry6yvgDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				
              request: "crt.HandleViewModelAttributeChangeRequest",
				
              /* The custom implementation of the system query handler. */
				
              handler: async (request, next) => {
					
                if (request.attributeName === 'PDS_UsrPriceUSD_d23act5' || 				
                    // if price changed
					   
                    request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		
                  // or percent changed
						
                  var price = await request.$context.PDS_UsrPriceUSD_d23act5;
						
                  var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
						
                  var commission = price * percent / 100;
						
                  request.$context.PDS_UsrCommissionUSD_fojsbzj = commission;
					
                }
					
                  /* Call the next handler if it exists and return its result. */
					
                return next?.handle(request);
				
              }
			
            }
		,
            {	
              request: "crt.PushButtonRequest",
              /* Implementation of the custom query handler. */
              handler: async (request, next) => {
                this.console.log("Button works...");
                Terrasoft.showInformation("My button was pressed.");
                var price = await request.$context.PDS_UsrPriceUSD_d23act5;
                this.console.log("Price = " + price);
                request.$context.PDS_UsrArea_555nw88 = price * 0.3;
                /* Call the next handler if it exists and return its result. */
                return next?.handle(request);
            }
          },
		
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			
          /* The validator type must contain a vendor prefix.
			
          Format the validator type in PascalCase. */
			
          "usr.DGValidator": {
				
            validator: function (config) {
					
              return function (control) {
						
                let value = control.value;
						
                let minValue = config.minValue;
						
                let valueIsCorrect = value >= minValue;
						
                var result;
						
                if (valueIsCorrect) {
							
                  result = null;
						
                } else {
							
                  result = {
								
                    "usr.DGValidator": {message: config.message}
							
                  };
						
                }
						
                  return result;
					
                };
				                      
              },
				
              params: [
					
              {
	name: "minValue"},
					
              {name: "message"}
				
            ],
				
            async: false
          }
        }/**SCHEMA_VALIDATORS*/
	};
});