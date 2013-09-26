<?php

require_once dirname(__FILE__) . '/../../../../../mibew/libs/classes/plugin_manager.php';
require_once dirname(__FILE__) . '/../../../../../mibew/libs/classes/plugin.php';

/**
 * Test class for PluginManager.
 * Generated by PHPUnit on 2012-07-17 at 16:09:18.
 */
class PluginManagerTest extends PHPUnit_Framework_TestCase {

	public function testLoadPlugins() {
		set_include_path(get_include_path() . PATH_SEPARATOR . realpath(dirname(__FILE__) . '/../../plugins/'));

		// Try to load plugin that does not exists
		// Following code wait for trigger user error, which converts by PHPUnit to an
		// Exception
		try {
			PluginManager::loadPlugins(
				array(
					array(
						'name' => 'missed_plugin'
					)
				)
			);
			$this->fail("Exception must be thrown");
		} catch(PHPUnit_Framework_Error_Warning $e) {}

		// Try to load plugin with an absent plugin in dependences list
		// Following code wait for trigger user warning, which converts by PHPUnit to an
		// Exception
		try {
			PluginManager::loadPlugins(
				array(
					array(
						'name' => 'phpunit_autotest_plugin_manager_dependence'
					)
				)
			);
			$this->fail("Exception must be thrown");
		} catch(PHPUnit_Framework_Error_Warning $e) {}

		// Try to load correct plugin
		PluginManager::loadPlugins(
			array(
				array(
					'name' => 'phpunit_autotest_plugin_manager'
				)
			)
		);

		// Check if plugin initialized correctry
		if(empty($GLOBALS['phpunit_autotest_plugin_manager'])) {
			$this->fail('Plugin not loaded and initialize correctly');
		}
	}

	/**
	 * @depends testLoadPlugins
	 */
	public function testGetPlugin() {
		// Try to get plugin with wrong name
		// Following code wait for trigger user warning, which converts by PHPUnit to an
		// Exception
		try {
			PluginManager::getPlugin('wrong_plugin_name');
			$this->fail("Exception must be thrown");
		} catch(Exception $e) {}

		// Try to get loaded plugin
		PluginManager::getPlugin('phpunit_autotest_plugin_manager');
	}

	/**
	 * @depends testGetPlugin
	 */
	public function testGetAllPlugins() {
		// Get loaded plugin
		$plugin = PluginManager::getPlugin('phpunit_autotest_plugin_manager');
		// Build plugins list to comparison
		$plugins_list = array('phpunit_autotest_plugin_manager' => $plugin);
		// Check loaded plugins list
		$this->assertEquals($plugins_list, PluginManager::getAllPlugins());
	}
}

?>
