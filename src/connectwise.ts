///<reference path="../typings/index.d.ts"/>
import * as comp from './api/companyAPI';
import * as exp from './api/expenseAPI';
import * as fin from './api/financeAPI';
import * as mark from './api/marketingAPI';
import * as proc from './api/procurementAPI';
import * as proj from './api/projectAPI';
import * as sal from './api/salesAPI';
import * as sch from './api/scheduleAPI';
import * as srv from './api/serviceAPI';
import * as sys from './api/systemAPI';
import * as tm from './api/timeAPI';

export class Connectwise {
	public CompaniesApi: comp.CompaniesApi;
	public CompanyManagementSummarysApi: comp.CompanyManagementSummarysApi;
	public CompanyNotesApi: comp.CompanyNotesApi;
	public CompanySitesApi: comp.CompanySitesApi;
	public CompanyStatusesApi: comp.CompanyStatusesApi;
	public CompanyTeamsApi: comp.CompanyTeamsApi;
	public ConfigurationsApi: comp.ConfigurationsApi;
	public ConfigurationStatusesApi: comp.ConfigurationStatusesApi;
	public ConfigurationTypeQuestionsApi: comp.ConfigurationTypeQuestionsApi;
	public ConfigurationTypesApi: comp.ConfigurationTypesApi;
	public ContactCommunicationsApi: comp.ContactCommunicationsApi;
	public ContactDepartmentsApi: comp.ContactDepartmentsApi;
	public ContactNotesApi: comp.ContactNotesApi;
	public ContactRelationshipsApi: comp.ContactRelationshipsApi;
	public ContactsApi: comp.ContactsApi;
	public ContactTypesApi: comp.ContactTypesApi;
	public ExpenseEntriesApi: exp.ExpenseEntriesApi;
	public ExpenseTypesApi: exp.ExpenseTypesApi;
	public AgreementAdditionsApi: fin.AgreementAdditionsApi;
	public AgreementAdjustmentsApi: fin.AgreementAdjustmentsApi;
	public AgreementsApi: fin.AgreementsApi;
	public AgreementSitesApi: fin.AgreementSitesApi;
	public AgreementTypesApi: fin.AgreementTypesApi;
	public AccountingBatchesApi: fin.AccountingBatchesApi;
	public AgreementBoardDefaultsApi: fin.AgreementBoardDefaultsApi;
	public InvoicePaymentsApi: fin.InvoicePaymentsApi;
	public InvoicesApi: fin.InvoicesApi;
	public AccountingBatchTransactionsApi: fin.AccountingBatchTransactionsApi;
	public AccountingUnpostedExpensesApi: fin.AccountingUnpostedExpensesApi;
	public AccountingUnpostedInvoicesApi: fin.AccountingUnpostedinvoicesApi;
	public AccountingUnpostedProcurementsApi: fin.AccountingUnpostedProcurementsApi;
	public CampaignAuditsApi: mark.CampaignAuditsApi;
	public CampaignsApi: mark.CampaignsApi;
	public CampaignStatusesApi: mark.CampaignStatusesApi;
	public CampaignTypesApi: mark.CampaignTypesApi;
	public CampaignEmailsOpenedApi: mark.CampaignEmailsOpenedApi;
	public CampaignFormsSubmittedApi: mark.CampaignFormsSubmittedApi;
	public GroupsApi: mark.GroupsApi;
	public CampaignLinksClickedApi: mark.CampaignLinksClickedApi;
	public GroupCompaniesApi: mark.GroupCompaniesApi;
	public GroupContactsApi: mark.GroupContactsApi;
	public CatalogComponentsApi: proc.CatalogComponentsApi;
	public CatalogsItemApi: proc.CatalogsItemApi;
	public ManufacturersApi: proc.ManufacturersApi;
	public ProductComponentsApi: proc.ProductComponentsApi;
	public ProductPickingShippingDetailsApi: proc.ProductPickingShippingDetailsApi;
	public ProductsItemApi: proc.ProductsItemApi;
	public PurchaseOrdersApi: proc.PurchaseOrdersApi;
	public ProjectContactsApi: proj.ProjectContactsApi;
	public ProjectNotesApi: proj.ProjectNotesApi;
	public ProjectPhasesApi: proj.ProjectPhasesApi;
	public ProjectsApi: proj.ProjectsApi;
	public ProjectsTeamMembersApi: proj.ProjectsTeamMembersApi;
	public ActivitiesApi: sal.ActivitiesApi;
	public ActivitiesStatusesApi: sal.ActivityStatusesApi;
	public OpportunityForecastsApi: sal.OpportunityForecastsApi;
	public OpportunitiesApi: sal.OpportunitiesApi;
	public OpportunityContactsApi: sal.OpportunityContactsApi;
	public OpportunityNotesApi: sal.OpportunityNotesApi;
	public OpportunityRatingsApi: sal.OpportunityRatingsApi;
	public OpportunityStatusesApi: sal.OpportunityStatusesApi;
	public OpportunityTeamsApi: sal.OpportunityTeamsApi;
	public OpportunityTypesApi: sal.OpportunityTypesApi;
	public OrdersApi: sal.OrdersApi;
	public ScheduleEntriesApi: sch.ScheduleEntriesApi;
	public ScheduleStatuesApi: sch.ScheduleStatusesApi;
	public ScheduleTypesApi: sch.ScheduleTypesApi;
	public BoardsApi: srv.BoardsApi;
	public CodesApi: srv.CodesApi;
	public BoardExcludedMembersApi: srv.BoardExcludedMembersApi;
	public BoardItemsApi: srv.BoardItemsApi;
	public KnowledgeBaseArticlesApi: srv.KnowledgeBaseArticlesApi;
	public LocationsApi: srv.LocationsApi;
	public PrioritiesApi: srv.PrioritiesApi;
	public TicketNotesApi: srv.TicketNotesApi;
	public SourcesApi: srv.SourcesApi;
	public BoardStatusesApi: srv.BoardStatusesApi;
	public BoardSubTypesApi: srv.BoardSubTypesApi;
	public SurveyQuestionsApi: srv.SurveyQuestionsApi;
	public SurveyResultsApi: srv.SurveyResultsApi;
	public SurveysApi: srv.SurveysApi;
	public TicketTasksApi: srv.TicketTasksApi;
	public BoardTeamsApi: srv.BoardTeamsApi;
	public TicketsApi: srv.TicketsApi;
	public BoardTypesApi: srv.BoardTypesApi;
	public AuditTrailApi: sys.AuditTrailApi;
	public CallbackEntriesApi: sys.CallbackEntriesApi;
	public ConnectWiseHostedSetupsApi: sys.ConnectWiseHostedSetupsApi;
	public DocumentsApi: sys.DocumentsApi;
	public InfoApi: sys.InfoApi;
	public IntegrationsApi: sys.IntegrationsApi;
	public LinksApi: sys.LinksApi;
	public MembersApi: sys.MembersApi;
	public MenuEntriesApi: sys.MenuEntriesApi;
	public ReportsApi: sys.ReportsApi;
	public UserDefinedFieldsApi: sys.UserDefinedFieldsApi;
	public TimeEntriesApi: tm.TimeEntriesApi;
	private authKey: string;
	constructor(host: string, companyId: string, publicKey: string, privateKey: string) {
		this.authKey = new Buffer(`${companyId}+${publicKey}:${privateKey}`).toString('base64');
		this.CompaniesApi = new comp.CompaniesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyManagementSummarysApi = new comp.CompanyManagementSummarysApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyNotesApi = new comp.CompanyNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanySitesApi = new comp.CompanySitesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyStatusesApi = new comp.CompanyStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CompanyTeamsApi = new comp.CompanyTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationsApi = new comp.ConfigurationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationStatusesApi = new comp.ConfigurationStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationTypeQuestionsApi = new comp.ConfigurationTypeQuestionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConfigurationTypesApi = new comp.ConfigurationTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactCommunicationsApi = new comp.ContactCommunicationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactDepartmentsApi = new comp.ContactDepartmentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactNotesApi = new comp.ContactNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactRelationshipsApi = new comp.ContactRelationshipsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactsApi = new comp.ContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ContactTypesApi = new comp.ContactTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ExpenseEntriesApi = new exp.ExpenseEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ExpenseTypesApi = new exp.ExpenseTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementAdditionsApi = new fin.AgreementAdditionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementAdjustmentsApi = new fin.AgreementAdjustmentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementsApi = new fin.AgreementsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementSitesApi = new fin.AgreementSitesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementTypesApi = new fin.AgreementTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingBatchesApi = new fin.AccountingBatchesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AgreementBoardDefaultsApi = new fin.AgreementBoardDefaultsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InvoicePaymentsApi = new fin.InvoicePaymentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingBatchTransactionsApi = new fin.AccountingBatchTransactionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingUnpostedExpensesApi = new fin.AccountingUnpostedExpensesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingUnpostedInvoicesApi = new fin.AccountingUnpostedinvoicesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AccountingUnpostedProcurementsApi = new fin.AccountingUnpostedProcurementsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignAuditsApi = new mark.CampaignAuditsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignsApi = new mark.CampaignsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignStatusesApi = new mark.CampaignStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignTypesApi = new mark.CampaignTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignEmailsOpenedApi = new mark.CampaignEmailsOpenedApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignFormsSubmittedApi = new mark.CampaignFormsSubmittedApi(`https://${host}/v4_6_release/apis/3.0`);
		this.GroupsApi = new mark.GroupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CampaignLinksClickedApi = new mark.CampaignLinksClickedApi(`https://${host}/v4_6_release/apis/3.0`);
		this.GroupCompaniesApi = new mark.GroupCompaniesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.GroupContactsApi = new mark.GroupContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CatalogComponentsApi = new proc.CatalogComponentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CatalogsItemApi = new proc.CatalogsItemApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ManufacturersApi = new proc.ManufacturersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductComponentsApi = new proc.ProductComponentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductPickingShippingDetailsApi = new proc.ProductPickingShippingDetailsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProductsItemApi = new proc.ProductsItemApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PurchaseOrdersApi = new proc.PurchaseOrdersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectContactsApi = new proj.ProjectContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectNotesApi = new proj.ProjectNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectPhasesApi = new proj.ProjectPhasesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectsApi = new proj.ProjectsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ProjectsTeamMembersApi = new proj.ProjectsTeamMembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ActivitiesApi = new sal.ActivitiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ActivitiesStatusesApi = new sal.ActivityStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityForecastsApi = new sal.OpportunityForecastsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunitiesApi = new sal.OpportunitiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityContactsApi = new sal.OpportunityContactsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityNotesApi = new sal.OpportunityNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityRatingsApi = new sal.OpportunityRatingsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityStatusesApi = new sal.OpportunityStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityTeamsApi = new sal.OpportunityTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OpportunityTypesApi = new sal.OpportunityTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.OrdersApi = new sal.OrdersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleEntriesApi = new sch.ScheduleEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleStatuesApi = new sch.ScheduleStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ScheduleTypesApi = new sch.ScheduleTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardsApi = new srv.BoardsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CodesApi = new srv.CodesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardExcludedMembersApi = new srv.BoardExcludedMembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardItemsApi = new srv.BoardItemsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.KnowledgeBaseArticlesApi = new srv.KnowledgeBaseArticlesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LocationsApi = new srv.LocationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.PrioritiesApi = new srv.PrioritiesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketNotesApi = new srv.TicketNotesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SourcesApi = new srv.SourcesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardStatusesApi = new srv.BoardStatusesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardSubTypesApi = new srv.BoardSubTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveyQuestionsApi = new srv.SurveyQuestionsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveyResultsApi = new srv.SurveyResultsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.SurveysApi = new srv.SurveysApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketTasksApi = new srv.TicketTasksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardTeamsApi = new srv.BoardTeamsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TicketsApi = new srv.TicketsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.BoardTypesApi = new srv.BoardTypesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.AuditTrailApi = new sys.AuditTrailApi(`https://${host}/v4_6_release/apis/3.0`);
		this.CallbackEntriesApi = new sys.CallbackEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ConnectWiseHostedSetupsApi = new sys.ConnectWiseHostedSetupsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.DocumentsApi = new sys.DocumentsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.InfoApi = new sys.InfoApi(`https://${host}/v4_6_release/apis/3.0`);
		this.IntegrationsApi = new sys.IntegrationsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.LinksApi = new sys.LinksApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MembersApi = new sys.MembersApi(`https://${host}/v4_6_release/apis/3.0`);
		this.MenuEntriesApi = new sys.MenuEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ReportsApi = new sys.ReportsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.UserDefinedFieldsApi = new sys.UserDefinedFieldsApi(`https://${host}/v4_6_release/apis/3.0`);
		this.TimeEntriesApi = new tm.TimeEntriesApi(`https://${host}/v4_6_release/apis/3.0`);
		this.ActivitiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ActivitiesStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementAdditionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementAdjustmentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementSitesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AuditTrailApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingBatchesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AgreementBoardDefaultsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CallbackEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignAuditsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CatalogComponentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CatalogsItemApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CodesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompaniesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyManagementSummarysApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanySitesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CompanyTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationTypeQuestionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConfigurationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ConnectWiseHostedSetupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactCommunicationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactDepartmentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactRelationshipsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.DocumentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignEmailsOpenedApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardExcludedMembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ExpenseEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ExpenseTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityForecastsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignFormsSubmittedApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.GroupsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InfoApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.IntegrationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardItemsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.KnowledgeBaseArticlesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LinksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.CampaignLinksClickedApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.LocationsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ManufacturersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.GroupCompaniesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.GroupContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.MenuEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunitiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityRatingsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OpportunityTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.OrdersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.InvoicePaymentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PrioritiesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProductComponentsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProductPickingShippingDetailsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProductsItemApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectContactsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectPhasesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ProjectsTeamMembersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.PurchaseOrdersApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ReportsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleStatuesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.ScheduleTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketNotesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SourcesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardStatusesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardSubTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveyQuestionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveyResultsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.SurveysApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketTasksApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardTeamsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TicketsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.TimeEntriesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingBatchTransactionsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.BoardTypesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingUnpostedExpensesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingUnpostedInvoicesApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.AccountingUnpostedProcurementsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
		this.UserDefinedFieldsApi.defaultHeaders = {
			'Authorization': `Basic ${this.authKey}`
		};
	}
}