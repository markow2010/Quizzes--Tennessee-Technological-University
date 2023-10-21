if( window.top.document.getElementById('forethoughtscript') === null ) {

	var frame = window.frameElement;

	if (!frame) {
		window.addEventListener('load', function () {
			var iframe = document.createElement('iframe');
			iframe.setAttribute( 'style.backgroundColor', 'transparent' );
			iframe.setAttribute( 'frameBorder', 0 );
			iframe.setAttribute( 'allowTransparency', true );
			iframe.setAttribute( 'id', 'chatFrame' );
			iframe.setAttribute( 'src', 'https://s.brightspace.com/lib/eus-widget/1.13.4/forethoughtframe.html' );
			iframe.setAttribute('style', "bottom: 0px; right: 0px; position: fixed;");
			iframe.setAttribute('allowfullscreen', 'allowfullscreen');
			iframe.setAttribute('mozallowfullscreen', 'mozallowfullscreen');
			iframe.setAttribute('msallowfullscreen', 'msallowfullscreen');
			iframe.setAttribute('oallowfullscreen', 'oallowfullscreen');
			iframe.setAttribute('webkitallowfullscreen', 'webkitallowfullscreen');
			window.top.document.body.appendChild(iframe);

			iframe.addEventListener('load', () => {
				iframe.contentWindow.postMessage({
					event: 'd2lIframeLoaded',
					windowData: {
						'data-EUSClientName': window.top.EUSClientName,
						'data-EUSDeploymentID': window.top.EUSDeploymentID,
						'data-EUSButtonID': window.top.EUSButtonID,
						'data-EUSLiveAgentDevName': window.top.EUSLiveAgentDevName,
						'data-SalesForceDomain': window.top.SalesForceDomain,
						'data-gslbBaseURL': window.top.gslbBaseURL,
						'data-BaseliveAgentContentURL': window.top.BaseliveAgentContentURL,
						'data-BaseLiveAgentURL': window.top.BaseLiveAgentURL,
						'data-CommunityChannelSearchURL': window.top.CommunityChannelSearchURL,
						'data-CurrentLISRoles': window.top.CurrentLISRoles,
						'data-OrgDefinedId': window.top.OrgDefinedId,
						'data-SchoolUrl': window.top.SchoolUrl,
						'data-FirstName': window.top.FirstName,
						'data-LastName': window.top.LastName,
						'data-Email': window.top.Email,
						'data-href': window.top.location.href,
						'data-Domain': window.top.D2LDomain,
						'data-language': window.top.Language,
						'data-ApiKey': '35622c3a-8168-4a60-b8eb-1c2b90f6e4c1'
					}
				}, 'https://s.brightspace.com')
			})

			const isMobile = () => {
        return window.screen.width < 480;
      };

      const defaultChatFrameStyle = `
        width: 100%;
        height: 100%;
      `;

      const defaultChatFrameContainerStyle = (bottom = 0, right = 0) => {
        return `
        bottom: ${bottom}px;
        right: ${right}px;
        position: fixed;
        z-index: 9999999;
      `;
      };

      const mobileChatFrameContainerStyle = `
        bottom: 0px;
        right: 0px;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 9999999;
      `;
	  
	  const contClosedWidgetStyleHeight = window.top.ClosedWidgetStyleHeight;
	  const contClosedWidgetStyleWidth = window.top.ClosedWidgetStyleWidth;

      const contClosedWidgetStyle = (height = contClosedWidgetStyleHeight, width = contClosedWidgetStyleWidth) => {
		return `
        height: ${height}px;
        width: ${width}px;
      `;
	  };
	  
      const contOpenedWidgetStyle = `
        max-width: 432px;
        width: 100%;
        height: 85%;
        max-height: 825px;
      `;

      const contSalesforceWidgetOpen = `
        height: 498px;
        width: 320px;
      `;

      const contSalesforceWidgetMinimized = `
        height: 50px;
        width: 210px;
      `;

      const ftOpenedWidgetStyle = `
        border-radius: 10px;
        border: 1px solid #eeeff2;
      `;

		window.forethoughtWidgetOpened = false;

			window.addEventListener('message', (e) => {
				const { event, method } = e.data;

				switch (event || method) {
          case 'Resize':
			if (!window.forethoughtWidgetOpened){
            iframe.setAttribute('style', defaultChatFrameContainerStyle().concat(contClosedWidgetStyle(e.data.ftHeight,e.data.ftWidth)));
            }
			break;
          case 'forethoughtWidgetOpened':
            if (isMobile()) {
              iframe.setAttribute('style', mobileChatFrameContainerStyle);
			  window.forethoughtWidgetOpened = true;
            } else {
              iframe.setAttribute('style', defaultChatFrameContainerStyle(0, 0).concat(contOpenedWidgetStyle).concat(ftOpenedWidgetStyle));
			  window.forethoughtWidgetOpened = true;
            }
            break;
          case 'forethoughtWidgetClosed':
			iframe.setAttribute('style', defaultChatFrameContainerStyle());
			window.forethoughtWidgetOpened = false;
            break;
          case 'forethoughtWidgetIntegrationHandoff':
            iframe.setAttribute('style', defaultChatFrameContainerStyle().concat(contSalesforceWidgetOpen));
			 window.forethoughtWidgetOpened = true;
            break;
          case 'salesforceWidgetMinimized':
            iframe.setAttribute('style', defaultChatFrameContainerStyle().concat(contSalesforceWidgetMinimized));
			 window.forethoughtWidgetOpened = true;
            break;
          case 'salesforceWidgetMaximized':
          case 'liveagent.event':
            iframe.setAttribute('style', defaultChatFrameContainerStyle(0, 20).concat(contSalesforceWidgetOpen));
			 window.forethoughtWidgetOpened = true;
            break;
          case 'salesforceWidgetDestroyed':
            window.forethoughtWidgetOpened = false;
            break;
          default:
        }
      });
		})
	}
}
